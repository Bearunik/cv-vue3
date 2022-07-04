export function groupByObject (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  collection: Array<any>,
  property: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return collection.reduce((objectsByKeyValue: any, obj: any) => {
    const value = obj[property]
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj)
    return objectsByKeyValue
  }, {})
}
