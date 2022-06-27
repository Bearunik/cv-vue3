import ExperenceInterface, {
  experienceType
} from '@/interfaces/ExperienceInterface'

export abstract class UserExperiencesController {
  public static experiences = [
    {
      title: 'AMA',
      todo: [
        {
          title: "Scrum Master - Manager d'équipe",
          tasks: [
            "Participation à la mise en place de l'agilité au niveau de la R&D",
            "Gestion de la bonne pratique à l'agilité au sein d'une équipe de 8 pers.",
            "Recrutements et passage d'entretiens trimestriels des membres de l'équipe",
            "Participation à la mise en place de l'agilité à l'échelle (Méthode SAFE)"
          ]
        },
        {
          title: 'Développeur web, Fullstack',
          tasks: [
            'Produit XpertEye, solution sur lunettes connectées (VueJS, TS, WebRTC)',
            'Mise en place de briques techniques (Keycloak, Salesforce, Crowdin)',
            'Partage et accompagnement sur les bonnes pratiques de dev (CI/CD, TU)',
            'Maintenance et refactoring techniques'
          ]
        },
        {
          title: 'Autre',
          tasks: ['Gestionnaire de la ludothèque R&D', 'Coordinateur RSE R&D']
        }
      ],
      startDate: new Date(2016),
      endDate: new Date(),
      color: '#37CFE4',
      type: experienceType.PERMANENT
    },
    {
      title: 'OATIC',
      todo: [
        {
          title: 'Développeur web, Fullstack',
          tasks: [
            "Produit Mookitek, créateur d'exercices interactifs en ligne",
            'Projets applicatifs pour des clients externes (Backbone, Ruby on rails)'
          ]
        }
      ],
      startDate: new Date(2013),
      endDate: new Date(2016),
      color: '#EF8943',
      type: experienceType.ALTERNATELY
    },
    {
      title: 'ENSCR',
      todo: [
        {
          title: 'Développeur web, Fullstack',
          tasks: [
            'Projets web de gestion (interne)',
            'Gestion du parc informatique'
          ]
        }
      ],
      startDate: new Date(2012),
      endDate: new Date(2013),
      color: '#ADCAD8',
      type: experienceType.ALTERNATELY
    }
  ] as Array<ExperenceInterface>
}
