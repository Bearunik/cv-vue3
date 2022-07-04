import { getBgRbga } from './color'

describe('getBgRbga', () => {
  it('get rgba color from hexa', () => {
    const rgbaColor = getBgRbga('#123456')
    expect(rgbaColor).toEqual('rgba(18, 52, 86, 0.2)')
  })
})
