import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// GraphQL API
const httpLink = createHttpLink({
  // 경로는 절대 경로로 지정
  uri: 'http://localhost:8080/_/graphql'
})

// 토큰 인증을 위한 미들웨어
const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: 'Bearer ' + localStorage.getItem('token') || ''
    }
  })
  return forward(operation)
})

// 캐시 구현
const cache = new InMemoryCache()

// Apollo 클라이언트 생성
const apolloClient = new ApolloClient({
  link: authMiddleware.concat(httpLink),
  cache
})

export default apolloClient
