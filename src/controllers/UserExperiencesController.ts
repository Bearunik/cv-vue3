import i18n from '@/i18n'
import ExperenceInterface, {
  experienceType
} from '@/interfaces/ExperienceInterface'

export abstract class UserExperiencesController {
  public static experiences = [
    {
      title: i18n.global.t('experiences.ama.title'),
      todo: [
        {
          title: i18n.global.t('experiences.jobs.scrum'),
          tasks: [
            i18n.global.t('experiences.ama.todo1.task1'),
            i18n.global.t('experiences.ama.todo1.task2'),
            i18n.global.t('experiences.ama.todo1.task3'),
            i18n.global.t('experiences.ama.todo1.task4')
          ]
        },
        {
          title: i18n.global.t('experiences.jobs.fullstack'),
          tasks: [
            i18n.global.t('experiences.ama.todo2.task1'),
            i18n.global.t('experiences.ama.todo2.task2'),
            i18n.global.t('experiences.ama.todo2.task3'),
            i18n.global.t('experiences.ama.todo2.task4')
          ]
        },
        {
          title: i18n.global.t('experiences.jobs.other'),
          tasks: [
            i18n.global.t('experiences.ama.todo3.task1'),
            i18n.global.t('experiences.ama.todo3.task2')
          ]
        }
      ],
      startDate: new Date(2016),
      endDate: new Date(),
      color: '#37CFE4',
      type: experienceType.PERMANENT
    },
    {
      title: i18n.global.t('experiences.oatic.title'),
      todo: [
        {
          title: i18n.global.t('experiences.jobs.fullstack'),
          tasks: [
            i18n.global.t('experiences.oatic.todo1.task1'),
            i18n.global.t('experiences.oatic.todo1.task2')
          ]
        }
      ],
      startDate: new Date(2013),
      endDate: new Date(2016),
      color: '#EF8943',
      type: experienceType.ALTERNATELY
    },
    {
      title: i18n.global.t('experiences.enscr.title'),
      todo: [
        {
          title: i18n.global.t('experiences.jobs.fullstack'),
          tasks: [
            i18n.global.t('experiences.enscr.todo1.task1'),
            i18n.global.t('experiences.enscr.todo1.task2')
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
