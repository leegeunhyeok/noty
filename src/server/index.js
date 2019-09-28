const { GraphQLServer } = require('graphql-yoga')
const { init } = require('./express')
const { prisma } = require('../prisma/generated/prisma-client')
const { getUser } = require('./util')

const path = require('path')

class NotyServer {
  constructor () {
    this._server = null
    this._option = null
  }

  createServer () {
    this._server = new GraphQLServer({
      typeDefs: path.join(__dirname, 'graphql/schema.graphql'),
      resolvers: require(path.join(__dirname, 'graphql/resolvers')),
      resolverValidationOptions :{
        requireResolversForResolveType: false
      },
      context: ({ request }) => {
        const tokenWithBearer = request.headers.authorization || ''
        const token = tokenWithBearer.split(' ')[1]
        const user = getUser(token)
    
        return {
          user,
          prisma
        }
      }
    })

    return this
  }

  initExpress () {
    init(this._server.express)
    return this
  }

  start (option, callback) {
    this._server.start(option, callback)
  }
}

exports.NotyServer = NotyServer
