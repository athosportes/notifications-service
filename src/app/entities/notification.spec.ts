import { Content } from "./content"
import { Notification } from "./notification";
describe('Notification', () => {

  it('shoud be able to create a notification', () => {
    const notification = new Notification({
      recipientId: 'example-recipientId',
      content: new Content('Nova solicitação de amizado'),
      category: 'social',
    })

    expect(notification).toBeTruthy();
  })

})

