const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('../prisma/generated/prisma-client')
const { PushManager } = require('./express/push')
const { init } = require('./express')
const { getUser } = require('./util')
const { log } = require('./logger')

const config = require('config')
const path = require('path')

class NotyServer {
  constructor () {
    this._server = null
    this._option = null
    this._pushManager = null
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
    
        return { user, prisma }
      }
    })

    log.success('GraphQL Server ready')
    return this
  }

  initPushManager () {
    log.info('Push Manager Initializing..')
    const serverKey = config.get('firebase.serverKey')
    const pushManager = new PushManager(serverKey)
    pushManager.init()

    this._pushManager = pushManager
    log.success('Push Manager ready')
    return this
  }

  initExpress () {
    init(this._server.express, this._pushManager)
    log.success('Express Server ready')
    return this
  }

  start (option, callback) {
    log.info('Starting NotyServer..')
    this._server.start(option, callback)
  }
}

exports.NotyServer = NotyServer
