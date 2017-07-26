const expect = require('expect')
const { generateMessage, generateLocationMessage } = require('./message')

describe('generateMessage', () => {
  it('Should generate correct message object', () => {
    const from = 'Honza'
    const text = 'This is test from Honza.'
    const message = generateMessage(from, text)

    expect(message.createdAt).toBeA('number')
    expect(message).toInclude({ from, text })
  })
})

describe('generateLocationMessage', () => {
  it('Should generate correct location object', () => {
    const from = 'Honza'
    const url = 'https://www.google.com/maps?q=1,1'
    const message = generateLocationMessage(from, 1, 1)

    expect(message.createdAt).toBeA('number')
    expect(message).toInclude({ from, url })
    expect(message.url).toBe(url)
  })
})
