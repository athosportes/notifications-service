import { NotificationRepository } from "../repositories/notification-repository";
import { Injectable } from '@nestjs/common';
import { NotificationNotFound } from './errors/notification-not-found';

//sempre que possível receber objetos e retornar objetos
interface UnreadNotificationRequest {
  notificationId: string;
}

type UnreadNotificationResponse = void;

@Injectable()
export class UnreadNotification {

  constructor(
    private notificationsRepository: NotificationRepository
  ) { }

  async execute(request: UnreadNotificationRequest): Promise<UnreadNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(notificationId);

    if (!notification) {
      throw new NotificationNotFound()
    }

    notification.unread()
    await this.notificationsRepository.save(notification);

  }
}