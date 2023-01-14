import { NotificationRepository } from "../repositories/notification-repository";
import { Injectable } from '@nestjs/common';
import { NotificationNotFound } from './errors/notification-not-found';

//sempre que possível receber objetos e retornar objetos
interface CancelNotificationRequest {
  notificationId: string;
}

type CancelNotificationResponse = void;

@Injectable()
export class CancelNotification {

  constructor(
    private notificationsRepository: NotificationRepository
  ) { }

  async execute(request: CancelNotificationRequest): Promise<CancelNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(notificationId);

    if (!notification) {
      throw new NotificationNotFound()
    }

    notification.cancel();
    await this.notificationsRepository.save(notification);

  }
}