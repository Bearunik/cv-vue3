import { UserAboutMeController } from '@/controllers/UserAboutMeController'
import i18n from '@/i18n'

export function sendMail (msg: string): void {
  const mail = UserAboutMeController.aboutMe.mail
  const body = 'body=' + encodeURIComponent(msg)
  const subject = 'subject=' + encodeURIComponent(i18n.global.t('mail-subject'))
  window.location.href = `mailto:${mail}?${body}&${subject}`
}
