import { NotificationRepository } from "../repositories/notification-repository";
import { Injectable } from '@nestjs/common';

//sempre que possível receber objetos e retornar objetos
interface CountRecipientNotificationRequest {
  recipientId: string;
}

interface CountRecipientNotificationResponse {
  count: number;
}

@Injectable()
export class CountRecipientNotification {
  constructor(private notificationsRepository: NotificationRepository) { }

  async execute(request: CountRecipientNotificationRequest): Promise<CountRecipientNotificationResponse> {
    const { recipientId } = request;

    const count = await this.notificationsRepository.countManyByRecipientId(recipientId);

    return { count };

  }
}