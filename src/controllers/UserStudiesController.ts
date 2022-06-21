import StudyInterface from '@/interfaces/StudyInterface'

export abstract class UserStudiesController {
  public static studies = [
    {
      title: 'Stud1',
      todo: [
        {
          title: 'todo1',
          tasks: ['task1', 'task2']
        }
      ],
      startDate: new Date(123),
      endDate: new Date(123),
      color: 'rgb(120, 154, 753)'
    },
    {
      title: 'Stud2',
      todo: [
        {
          title: 'todo1',
          tasks: ['task1', 'task2']
        },
        {
          title: 'todo2',
          tasks: ['task1']
        }
      ],
      startDate: new Date(123),
      endDate: new Date(123),
      color: '#456723',
      withCompany: true
    }
  ] as Array<StudyInterface>
}
