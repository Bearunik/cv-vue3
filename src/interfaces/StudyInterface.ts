import TodoInterface from './TodoInterface'

export default interface StudyInterface {
  title: string
  todo: Array<TodoInterface>
  startDate: Date
  endDate: Date
  color: string
  withCompany?: boolean
}
