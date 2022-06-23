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
      src: require('@/assets/skills/vuejs.png')
    },
    {
      name: 'Jest',
      category: skillCategory.FRAMEWORK,
      src: require('@/assets/skills/jest.png')
    },
    {
      name: 'Android',
      category: skillCategory.FRAMEWORK,
      src: require('@/assets/skills/android.png')
    },
    {
      name: 'MySQL',
      category: skillCategory.DATA,
      src: require('@/assets/skills/mysql.png')
    },
    {
      name: 'MariaDB',
      category: skillCategory.DATA,
      src: require('@/assets/skills/mariadb.png')
    },
    {
      name: 'Crowdin',
      category: skillCategory.TECHNOLOGY,
      src: require('@/assets/skills/crowdin.png')
    },
    {
      name: 'Docker',
      category: skillCategory.TECHNOLOGY,
      src: require('@/assets/skills/docker.png')
    },
    {
      name: 'Gitlab',
      category: skillCategory.TECHNOLOGY,
      src: require('@/assets/skills/gitlab.png')
    },
    {
      name: 'Jenkins',
      category: skillCategory.TECHNOLOGY,
      src: require('@/assets/skills/jenkins.png')
    },
    {
      name: 'Keycloak',
      category: skillCategory.TECHNOLOGY,
      src: require('@/assets/skills/keycloak.png')
    },
    {
      name: 'Liveswitch',
      category: skillCategory.TECHNOLOGY,
      src: require('@/assets/skills/liveswitch.png')
    },
    {
      name: 'Matomo',
      category: skillCategory.TECHNOLOGY,
      src: require('@/assets/skills/matomo.png')
    },
    {
      name: 'Proxmox',
      category: skillCategory.TECHNOLOGY,
      src: require('@/assets/skills/proxmox.png')
    },
    {
      name: 'Salesforce',
      category: skillCategory.TECHNOLOGY,
      src: require('@/assets/skills/salesforce.png')
    },
    {
      name: 'Sentry',
      category: skillCategory.TECHNOLOGY,
      src: require('@/assets/skills/sentry.png')
    },
    {
      name: 'WebRTC',
      category: skillCategory.TECHNOLOGY,
      src: require('@/assets/skills/webrtc.png')
    }
  ] as Array<SkillInterface>
}
