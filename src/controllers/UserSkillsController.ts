import SkillInterface, { skillCategory } from '@/interfaces/SkillInterface'

export abstract class UserSkillsController {
  public static skills = [
    {
      name: 'Agilité',
      category: skillCategory.ORGANISATION,
      src: require('@/assets/skills/agile.png')
    },
    {
      name: 'Jira',
      category: skillCategory.ORGANISATION,
      src: require('@/assets/skills/jira.png')
    },
    {
      name: 'Suite Office',
      category: skillCategory.ORGANISATION,
      src: require('@/assets/skills/office.png')
    },
    {
      name: 'Asciidoc',
      category: skillCategory.ORGANISATION,
      src: require('@/assets/skills/ascii.png')
    },
    {
      name: 'Windows',
      category: skillCategory.OS,
      src: require('@/assets/skills/windows.png')
    },
    {
      name: 'Linux',
      category: skillCategory.OS,
      src: require('@/assets/skills/linux.png')
    },
    {
      name: 'Mac',
      category: skillCategory.OS,
      src: require('@/assets/skills/mac.png')
    },
    {
      name: 'Javascript',
      category: skillCategory.LANGAGE,
      src: require('@/assets/skills/javascript.png')
    },
    {
      name: 'Typescript',
      category: skillCategory.LANGAGE,
      src: require('@/assets/skills/typescript.png')
    },
    {
      name: 'Html5',
      category: skillCategory.LANGAGE,
      src: require('@/assets/skills/html5.png')
    },
    {
      name: 'Css3',
      category: skillCategory.LANGAGE,
      src: require('@/assets/skills/css3.png')
    },
    {
      name: 'Anglais',
      category: skillCategory.LANGAGE,
      src: require('@/assets/skills/english.png')
    },
    {
      name: 'VueJS',
      category: skillCategory.FRAMEWORK,
      src: require('@/assets/skills/vuejs.png'),
      url: 'https://vuejs.org/'
    },
    {
      name: 'Jest',
      category: skillCategory.FRAMEWORK,
      src: require('@/assets/skills/jest.png'),
      url: 'https://jestjs.io/'
    },
    {
      name: 'Android',
      category: skillCategory.FRAMEWORK,
      src: require('@/assets/skills/android.png'),
      url: 'https://developer.android.com/'
    },
    {
      name: 'MySQL',
      category: skillCategory.DATA,
      src: require('@/assets/skills/mysql.png'),
      url: 'https://www.mysql.com/'
    },
    {
      name: 'MariaDB',
      category: skillCategory.DATA,
      src: require('@/assets/skills/mariadb.png'),
      url: 'https://mariadb.org/'
    },
    {
      name: 'Crowdin',
      category: skillCategory.TECHNOLOGY,
      src: require('@/assets/skills/crowdin.png'),
      url: 'https://crowdin.com/'
    },
    {
      name: 'Docker',
      category: skillCategory.ENVIRONMENT,
      src: require('@/assets/skills/docker.png'),
      url: 'https://www.docker.com/'
    },
    {
      name: 'Gitlab',
      category: skillCategory.ENVIRONMENT,
      src: require('@/assets/skills/gitlab.png'),
      url: 'https://docs.gitlab.com/'
    },
    {
      name: 'Jenkins',
      category: skillCategory.ENVIRONMENT,
      src: require('@/assets/skills/jenkins.png'),
      url: 'https://www.jenkins.io/'
    },
    {
      name: 'Keycloak',
      category: skillCategory.TECHNOLOGY,
      src: require('@/assets/skills/keycloak.png'),
      url: 'https://www.keycloak.org/'
    },
    {
      name: 'Liveswitch',
      category: skillCategory.TECHNOLOGY,
      src: require('@/assets/skills/liveswitch.png'),
      url: 'https://www.liveswitch.io/'
    },
    {
      name: 'Matomo',
      category: skillCategory.TECHNOLOGY,
      src: require('@/assets/skills/matomo.png'),
      url: 'https://matomo.org/'
    },
    {
      name: 'Proxmox',
      category: skillCategory.TECHNOLOGY,
      src: require('@/assets/skills/proxmox.png'),
      url: 'https://www.proxmox.com/'
    },
    {
      name: 'Salesforce',
      category: skillCategory.TECHNOLOGY,
      src: require('@/assets/skills/salesforce.png'),
      url: 'https://www.salesforce.com/'
    },
    {
      name: 'Sentry',
      category: skillCategory.TECHNOLOGY,
      src: require('@/assets/skills/sentry.png'),
      url: 'https://sentry.io/'
    },
    {
      name: 'WebRTC',
      category: skillCategory.TECHNOLOGY,
      src: require('@/assets/skills/webrtc.png'),
      url: 'https://webrtc.org/'
    }
  ] as Array<SkillInterface>
}
