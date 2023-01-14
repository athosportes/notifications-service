import { Content } from "@app/entities/content"
import { Notification } from "@app/entities/notification"
import { Notification as RawNotification } from '@prisma/client'

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
      readtAt: notification.readAt,
      createdAt: notification.createdAt
    }
  }

  static toDomain(raw: RawNotification): Notification {
    return new Notification({
      category: raw.category,
      content: new Content(raw.content),
      recipientId: raw.recipientId,
      readAt: raw.readtAt,
      canceledAt: raw.canceledAt,
      createdAt: raw.createdAt
    }, raw.id)
  }
}