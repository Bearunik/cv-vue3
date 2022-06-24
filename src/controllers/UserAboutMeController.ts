import i18n from '@/i18n'
import AboutMeInterface from '@/interfaces/AboutMeInterface'

export abstract class UserAboutMeController {
  public static aboutMe = {
    mail: 'mickael@mms-family.fr',
    location: 'Rennes',
    text: i18n.global.t('my-description'),
    hobbies: [
      {
        icon: 'account-group',
        color: 'blue',
        title: i18n.global.t('icons.together')
      },
      {
        icon: 'hammer-wrench',
        color: 'grey',
        title: i18n.global.t('icons.build')
      },
      {
        icon: 'dice-d20',
        color: 'red',
        title: i18n.global.t('icons.game')
      },
      {
        icon: 'palette-outline',
        color: 'orange',
        title: i18n.global.t('icons.creativiy')
      }
    ]
  } as AboutMeInterface
}
