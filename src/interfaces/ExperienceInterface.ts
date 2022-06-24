import TodoInterface from './TodoInterface'

export enum experienceType {
  ALTERNATELY,
  FIXED_TERM,
  TEMPORARY
}

export default interface ExperenceInterface {
  title: string
  todo: Array<TodoInterface>
  startDate: Date
  endDate: Date
  color: string
  type: experienceType
}
