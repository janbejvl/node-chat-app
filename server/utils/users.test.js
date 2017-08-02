const expect = require('expect')
const { Users } = require('./users')

describe('Users', () => {
  
  beforeEach(() => {
    users = new Users()
    users.users = [{
      id: 1,
      name: 'Mike',
      room: 'Node course'
    }, {
      id: 2,
      name: 'Jen',
      room: 'React course'
    }, {
      id: 3,
      name: 'Julie',
      room: 'Node course'
    }]
  })
  it('Should add a new user', () => {
    const users = new Users()
    const user = { id: '/#f4jg5489gj9', name: 'Honza', room: 'Test room' }
    users.addUser(user.id, user.name, user.room)

    expect(users.users).toEqual([user])
  })

  it('Should remove a user', () => {
    const userId = 1
    const user = users.removeUser(userId)

    expect(user.id).toBe(userId)
    expect(users.users.length).toBe(2)
  })

  it('Should not remove a user', () => {
    const userId = 99
    const user = users.removeUser(userId)

    expect(user).toNotExist()
    expect(users.users.length).toBe(3)
  })

  it('Should find user', () => {
    const userId = 2
    const user = users.getUser(userId)

    expect(user.id).toBe(userId)
  })

  it('Should not find user', () => {
    const userId = 99
    const user = users.getUser(userId)
    
    expect(user).toNotExist()
  })

  it('Should return names for Node course', () => {
    let userList = users.getUserList('Node course')

    expect(userList).toEqual(['Mike', 'Julie'])
  })

  it('Should return names for React course', () => {
    let userList = users.getUserList('React course')

    expect(userList).toEqual(['Jen'])
  })

})
