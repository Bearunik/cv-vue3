import { sendMail } from './mail'

jest.mock('@/i18n', () => {
  return {
    global: {
      t: (str: string) => {
        return str
      }
    }
  }
})

describe('sendMail', () => {
  it('send test mail', () => {
    sendMail('test')
    expect(global.window.location.href).toEqual(
      'mailto:mickael@mms-family.fr?body=test&subject=mail-subject'
    )
  })
})

afterAll(() => {
  global.window.location.href = 'null'
})
