export enum skillCategory {
  ORGANISATION,
  OS,
  LANGAGE,
  FRAMEWORK,
  ENVIRONMENT,
  DATA,
  TECHNOLOGY
}

export default interface SkillInterface {
  name: string
  category: skillCategory
  src: string,
  url?: string
}
