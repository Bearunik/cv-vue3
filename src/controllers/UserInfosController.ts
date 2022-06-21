import ExperenceInterface from '@/interfaces/ExperienceInterface'
import StudyInterface from '@/interfaces/StudyInterface'
import SkillInterface, { skillCategory } from '@/interfaces/SkillInterface'

export abstract class UserSkills {
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

export abstract class UserExperiences {
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

export abstract class UserStudies {
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
