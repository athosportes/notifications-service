import { NotificationRepository } from "../repositories/notification-repository";
import { Injectable } from '@nestjs/common';
import { Notification } from "@app/entities/notification";

//sempre que possível receber objetos e retornar objetos
interface GetRecipientNotificationRequest {
  recipientId: string;
}

interface GetRecipientNotificationResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientNotification {
  constructor(private notificationsRepository: NotificationRepository) { }

  async execute(request: GetRecipientNotificationRequest): Promise<GetRecipientNotificationResponse> {
    const { recipientId } = request;

    const notifications = await this.notificationsRepository.findManyByRecipientId(recipientId);

    return { notifications };

  }
}