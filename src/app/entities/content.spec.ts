import { Content } from "./content"

describe('Notification content', () => {

  it('shoud be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade');

    expect(content).toBeTruthy();
  })

  it('shoud not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  })

  it('shoud not be able to create a notification content with more than 5 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  })


})

