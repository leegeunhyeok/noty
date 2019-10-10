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
    checkUserEmailExist: async (_parent, { email }, ctx) => {
      // Check email is exist
      return !!await ctx.prisma.user({ email })
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
    login: async (_parent, { userId, password }, ctx) => {
      // Find user by userId
      const user = await ctx.prisma.user({ userId })
    
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
        name: user.name,
        email: user.email,
        grade: user.grade
      }, 'secret', { // TODO: Generate random value
        expiresIn: '1h'
      })

      return { token, user }
    },
    createNote: async (_parent, { title, content }, ctx) => {
      if (!ctx.user) {
        throw new Error('Not Authenticated')
      }

      const note = await ctx.prisma.createNote({
        title,
        content,
        user: {
          connect: {
            id: ctx.user.id
          }
        }
      })

      return note
    },
    updateNote: async (_parent, { noteId, title, content }, ctx) => {
      if (!ctx.user) {
        throw new Error('Not Authenticated')
      }

      const note = await ctx.prisma.updateNote({
        where: {
          id: noteId
        },
        data: {
          title,
          content
        }
      })

      return note
    },
    deleteNote: async (_parent, { noteId }, ctx) => {
      if (!ctx.user) {
        throw new Error('Not Authenticated')
      }

      const note = await ctx.prisma.deleteNote({
        id: noteId
      })
      
      return !!note
    },
    createTag: async (_parent, { name, color }, ctx) => {
      if (!ctx.user) {
        throw new Error('Not Authenticated')
      }

      const tag = await ctx.prisma.createTag({
        name,
        color,
        user: {
          connect: {
            id: ctx.user.id
          }
        }
      })

      return tag
    },
    updateTag: async (_parent, { tagId, name, color }, ctx) => {
      if (!ctx.user) {
        throw new Error('Not Authenticated')
      }

      const tag = await ctx.prisma.updateTag({
        where: {
          id: tagId
        },
        data: {
          name,
          color
        }
      })

      return tag
    },
    deleteTag: async (_parent, { tagId }, ctx) => {
      if (!ctx.user) {
        throw new Error('Not Authenticated')
      }

      const tag = await ctx.prisma.deleteTag({
        id: tagId
      })
      
      return !!tag
    },
    createTodo: async (_parent, { content, tagId }, ctx) => {
      if (!ctx.user) {
        throw new Error('Not Authenticated')
      }

      const user = await ctx.prisma.user({ id: ctx.user.id })
      const updatedUser = await ctx.prisma.updateUser({
        where: {
          id: user.id
        },
        data: {
          index: user.index + 1
        }
      })

      const todo = await ctx.prisma.createTodo({
        content,
        index: updatedUser.index,
        user: {
          connect: {
            id: updatedUser.id
          }
        },
        tag: {
          connect: {
            id: tagId
          }
        }
      })

      return todo
    },
    updateTodo: async (_parent, { todoId, content, tagId, done }, ctx) => {
      if (!ctx.user) {
        throw new Error('Not Authenticated')
      }

      const todo = await ctx.prisma.updateTodo({
        where: {
          id: todoId
        },
        data: {
          content,
          done,
          tag: {
            connect: {
              id: tagId
            }
          }
        }
      })

      return todo
    },
    deleteTodo: async (_parent, { todoId }, ctx) => {
      if (!ctx.user) {
        throw new Error('Not Authenticated')
      }

      const todo = await ctx.prisma.deleteTodo({
        id: todoId
      })
      
      return !!todo
    }
  },
  User: {
    notes: ({ id }, _args, context) => {
      return context.prisma.user({ id }).notes()
    },
    tags: ({ id }, _args, context) => {
      return context.prisma.user({ id }).tags()
    },
    todos: ({ id }, _args, context) => {
      return context.prisma.user({ id }).todos()
    }
  },
  Note: {
    user: ({ id }, _args, context) => {
      return context.prisma.note({ id }).user()
    }
  },
  Tag: {
    user: ({ id }, _args, context) => {
      return context.prisma.tag({ id }).user()
    },
    todos: ({ id }, _args, context) => {
      return context.prisma.tag({ id }).todos()
    }
  },
  Todo: {
    tag: ({ id }, _args, context) => {
      return context.prisma.todo({ id }).tag()
    }
  }
}
