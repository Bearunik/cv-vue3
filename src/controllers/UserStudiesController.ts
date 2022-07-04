// import i18n from '@/i18n'
import i18n from '@/i18n'
import StudyInterface, { studyType } from '@/interfaces/StudyInterface'

export abstract class UserStudiesController {
  public static studies = [
    {
      title: i18n.global.t('studies.imie.title'),
      todo: [
        {
          title: i18n.global.t('studies.levels.master'),
          tasks: [
            i18n.global.t('studies.imie.todo.task1'),
            i18n.global.t('studies.imie.todo.task2'),
            i18n.global.t('studies.imie.todo.task3'),
            i18n.global.t('studies.imie.todo.task4')
          ]
        }
      ],
      startDate: new Date('2013'),
      endDate: new Date('2016'),
      color: '#46B0E0',
      type: studyType.ALTERNATELY
    },
    {
      title: i18n.global.t('studies.aftec.title'),
      todo: [
        {
          title: i18n.global.t('studies.levels.bts'),
          tasks: [
            i18n.global.t('studies.aftec.todo.task1'),
            i18n.global.t('studies.aftec.todo.task2'),
            i18n.global.t('studies.aftec.todo.task3')
          ]
        }
      ],
      startDate: new Date('2012'),
      endDate: new Date('2013'),
      color: '#FBD04E',
      type: studyType.ALTERNATELY
    },
    {
      title: i18n.global.t('studies.coetlogon.title'),
      todo: [
        {
          title: i18n.global.t('studies.levels.bac'),
          tasks: [
            i18n.global.t('studies.coetlogon.todo.task1'),
            i18n.global.t('studies.coetlogon.todo.task2')
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
