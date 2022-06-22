import i18n from '@/i18n'
import AboutMeInterface from '@/interfaces/AboutMeInterface'

export abstract class UserAboutMeController {
  public static aboutMe = {
    text: i18n.global.t('my-description'),
    hobbies: [
      {
        icon: 'account-group',
        color: 'blue'
      },
      {
        icon: 'hammer-wrench',
        color: 'grey'
      },
      {
        icon: 'dice-d20',
        color: 'red'
      },
      {
        icon: 'palette-outline',
        color: 'orange'
      }
    ]
  } as AboutMeInterface
}
