import { groupByObject } from './array'

const objectsToTest = [
  {
    type: 1,
    text: 'a'
  },
  {
    type: 1,
    text: 'b'
  },
  {
    type: 1,
    text: 'c'
  },
  {
    type: 1,
    text: 'd'
  },
  {
    type: 1,
    text: 'e'
  },
  {
    type: 2,
    text: 'a'
  },
  {
    type: 2,
    text: 'b'
  }
]

describe('groupByObject', () => {
  it('get object grouped', () => {
    const groupedObject = groupByObject(objectsToTest, 'type')
    expect(Object.keys(groupedObject).length).toEqual(2)
    expect(groupedObject['1'].length).toEqual(5)
    expect(groupedObject['2'].length).toEqual(2)
  })
})
