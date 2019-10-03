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
    },
    userNote: async (_parent, { userId }, ctx) => {
      return await ctx.prisma.user({ userId }).notes()
    },
    userTag: async (_parent, { userId }, ctx) => {
      return await ctx.prisma.user({ userId }).tags()
    },
    userTodo: async (_parent, { userId }, ctx) => {
      return await ctx.prisma.user({ userId }).todos()
    }
  },
  Mutation: {
    checkUserIdExist: async (_parent, { userId }, ctx) => {
      // Check userId is exist
      return !!await ctx.prisma.user({ userId })
    },
    register: async (_parent, { userId, name, email, password }, ctx) => {
      // Password hasing
      const hashedPassword = await bcrypt.hash(password, 10)

      // Insert user data to DB
      const user = await ctx.prisma.createUser({
        userId,
        name,
        email,
        password: hashedPassword,
        grade: 'DEFAULT_USER'
      })
      return user
    },
    login: async (_parent, { name, password }, ctx) => {
      // Find user by username
      const user = await ctx.prisma.user({ name })
    
      if (!user) {
        throw new Error('Invalid Login')
      }
      
      // Password compare
      const passwordMatch = await bcrypt.compare(password, user.password)
    
      if (!passwordMatch) {
        throw new Error('Invalid Login')
      }
    
      // Token issuance
      const token = jwt.sign({
        id: user.id,
        username: user.email
      }, 'secret', { // TODO: Generate random value
        expiresIn: '1d'
      })

      return { token, user }
    }
  },
  User: {
    notes: ({ id }, _args, context) => {
      return context.prisma.User({ id }).notes()
    },
    tags: ({ id }, _args, context) => {
      return context.prisma.User({ id }).tags()
    },
    todos: ({ id }, _args, context) => {
      return context.prisma.User({ id }).todos()
    }
  },
  Note: {
    user: ({ id }, _args, context) => {
      return context.prisma.Note({ id }).user()
    }
  },
  Tag: {
    user: ({ id }, _args, context) => {
      return context.prisma.Tag({ id }).user()
    },
    todos: ({ id }, _args, context) => {
      return context.prisma.Tag({ id }).todos()
    }
  },
  Todo: {
    tag: ({ id }, _args, context) => {
      return context.prisma.Todo({ id }).tag()
    }
  }
}
