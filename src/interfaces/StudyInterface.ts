import TodoInterface from './TodoInterface'

export enum studyType {
  ALTERNATELY,
  CONTINOUS
}

export default interface StudyInterface {
  title: string
  todo: Array<TodoInterface>
  startDate: Date
  endDate: Date
  color: string
  type: studyType
}
