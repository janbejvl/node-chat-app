const expect = require('expect')
const { isRealString } = require('./validation')

describe('isRealString', () => {  
  it('Should reject non-string values', () => {
    const str = 123
    const res = isRealString(str)
    expect(res).toBe(false)

  })

  it('Should reject string with only spaces', () => {
    const str = '     '
    const res = isRealString(str)
    expect(res).toBe(false)
  })

  it('Should allow string with non-space characters', () => {
    const str = '  Honza   '
    const res = isRealString(str)
    expect(res).toBe(true)
  })
})
