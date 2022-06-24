// import i18n from '@/i18n'
import StudyInterface, { studyType } from '@/interfaces/StudyInterface'

export abstract class UserStudiesController {
  public static studies = [
    {
      title: 'IMIE',
      todo: [
        {
          title: 'Licence & Master(BAC + 5)',
          tasks: [
            'Licence CDPN (Concepteur Développeur en Projet Numérique)',
            "Master EEDSI (Expert en Etudes et Développement du Système d'Information)",
            'Participation au programme « les Entreprenariales »',
            'Alternance avec la société « OATIC »'
          ]
        }
      ],
      startDate: new Date('2013'),
      endDate: new Date('2016'),
      color: '#46B0E0',
      type: studyType.ALTERNATELY
    },
    {
      title: 'AFTEC',
      todo: [
        {
          title: 'BTS (BAC +2)',
          tasks: [
            'BTS SIO (Services Informatiques aux Organisations)',
            'Spécialité SLAM (Solution Logiciel et Application Métier)',
            "Alternance avec l'école « ENSCR »"
          ]
        }
      ],
      startDate: new Date('2012'),
      endDate: new Date('2013'),
      color: '#FBD04E',
      type: studyType.ALTERNATELY
    },
    {
      title: 'Coëtlogon',
      todo: [
        {
          title: 'Bac Professionnel',
          tasks: [
            'Bac Pro SEN (Système Electronique et Numérique)',
            'Spécialité TR (Télécom et Réseaux)'
          ]
        }
      ],
      startDate: new Date('2010'),
      endDate: new Date('2012'),
      color: '#556988',
      type: studyType.CONTINOUS
    }
  ] as Array<StudyInterface>
}
