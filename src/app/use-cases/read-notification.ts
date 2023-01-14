import { NotificationRepository } from "../repositories/notification-repository";
import { Injectable } from '@nestjs/common';
import { NotificationNotFound } from './errors/notification-not-found';

//sempre que possível receber objetos e retornar objetos
interface ReadNotificationRequest {
  notificationId: string;
}

type ReadNotificationResponse = void;

@Injectable()
export class ReadNotification {

  constructor(
    private notificationsRepository: NotificationRepository
  ) { }

  async execute(request: ReadNotificationRequest): Promise<ReadNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(notificationId);

    if (!notification) {
      throw new NotificationNotFound()
    }

    notification.read();
    await this.notificationsRepository.save(notification);

  }
}