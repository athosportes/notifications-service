import { Notification, NotificationProps } from "@app/entities/notification"
import { Content } from "@app/entities/content"

//Partial faz com que todas as propriedades sejam opcionais
type Override = Partial<NotificationProps>

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitação de amizado'),
    recipientId: 'recipient-1',
    ...override
  })
}