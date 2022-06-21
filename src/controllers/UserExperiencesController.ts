import ExperenceInterface from '@/interfaces/ExperienceInterface'

export abstract class UserExperiencesController {
  public static experiences = [
    {
      title: 'Exp1',
      todo: [
        {
          title: 'todo1',
          tasks: ['task1', 'task2', 'task3', 'task4', 'task5']
        }
      ],
      startDate: new Date(123),
      endDate: new Date(123),
      color: 'red'
    },
    {
      title: 'Exp2',
      todo: [
        {
          title: 'todo1',
          tasks: ['task1', 'task2', 'task3', 'task4']
        },
        {
          title: 'todo2',
          tasks: ['task1', 'task2', 'task3']
        }
      ],
      startDate: new Date(123),
      endDate: new Date(123),
      color: '#123456'
    }
  ] as Array<ExperenceInterface>
}
