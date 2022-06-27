import TodoInterface from './TodoInterface'

export enum experienceType {
  ALTERNATELY,
  FIXED_TERMS,
  PERMANENT
}

export default interface ExperenceInterface {
  title: string
  todo: Array<TodoInterface>
  startDate: Date
  endDate: Date
  color: string
  type: experienceType
}
