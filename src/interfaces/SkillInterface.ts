export enum skillCategory {
    ENVIRONMENT,
    NETWORK,
    LANGAGE,
    OS,
    FRAMEWORK,
    DATA,
    TECHNOLOGY
}

export default interface SkillInterface {
    name: string;
    description: string;
    category: skillCategory;
    src: string;
}
