import TodoInterface from './TodoInterface'

export default interface ExperenceInterface {
  title: string
  todo: Array<TodoInterface>
  startDate: Date
  endDate: Date
  color: string
}
