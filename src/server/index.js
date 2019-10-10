const { GraphQLServer } = require('graphql-yoga')
const { init } = require('./express')
const { prisma } = require('../prisma/generated/prisma-client')
const { getUser } = require('./util')
const { log } = require('./logger')

const path = require('path')

class NotyServer {
  constructor () {
    this._server = null
    this._option = null
    log.success('Server instance created')
  }

  createServer () {
    log.info('GraphQL Server Initializing..')
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

    log.success('GraphQL Server ready')
    return this
  }

  initExpress () {
    init(this._server.express)
    log.success('Express Server ready')
    return this
  }

  start (option, callback) {
    log.info('Starting NotyServer..')
    this._server.start(option, callback)
  }
}

exports.NotyServer = NotyServer
