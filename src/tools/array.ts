// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function groupByObject (collection: any, property: string): Array<any> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return collection.reduce((objectsByKeyValue: any, obj: any) => {
    const value = obj[property]
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj)
    return objectsByKeyValue
  }, {})
}
