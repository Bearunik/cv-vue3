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
    }
  ] as Array<SkillInterface>
}
