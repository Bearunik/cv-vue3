import SkillInterface, { skillCategory } from '@/interfaces/SkillInterface'

export abstract class UserSkillsController {
  public static skills = [
    {
      name: 'Jenkins',
      category: skillCategory.ENVIRONMENT,
      src: '@/assets/logo.png'
    },
    {
      name: 'Jenkins2',
      category: skillCategory.ENVIRONMENT,
      src: '@/assets/logo.png'
    },
    {
      name: 'Jenkins3',
      category: skillCategory.ENVIRONMENT,
      src: '@/assets/logo.png'
    },
    {
      name: 'Jenkins4',
      category: skillCategory.ENVIRONMENT,
      src: '@/assets/logo.png'
    }
  ] as Array<SkillInterface>
}
