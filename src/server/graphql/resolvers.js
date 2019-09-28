/*

MIT License

Copyright (c) 2019 GeunHyeok LEE

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
  Query: {
    currentUser: (_parent, _args, { user, prisma }) => {
      if (!user) {
        throw new Error('Not Authenticated')
      }
      return prisma.user({ id: user.id })
    }
  },
  Mutation: {
    register: async (_parent, { username, password }, ctx) => {
      const hashedPassword = await bcrypt.hash(password, 10)
      const user = await ctx.prisma.createUser({
        username,
        password: hashedPassword
      })
      return user
    },
    login: async (_parent, { username, password }, ctx) => {
      const user = await ctx.prisma.user({ username })
    
      if (!user) {
        throw new Error('Invalid Login')
      }
    
      const passwordMatch = await bcrypt.compare(password, user.password)
    
      if (!passwordMatch) {
        throw new Error('Invalid Login')
      }
    
      const token = jwt.sign(
        {
          id: user.id,
          username: user.email
        },
        'secret',
        { expiresIn: '1d' }
      )

      return {
        token,
        user
      }
    }
  },
  User: {
    todos: ({ id }, _args, context) => {
      return context.prisma.User({ id }).todos()
    }
  },
  Todo: {
    user: ({ id }, _args, context) => {
      return context.prisma.Todo({ id }).user()
    }
  }
}
