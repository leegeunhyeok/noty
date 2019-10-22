import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// GraphQL API
const httpLink = createHttpLink({
  // 경로는 절대 경로로 지정
  uri: 'http://localhost:8080/_/graphql'
})

// 캐시 구현
const cache = new InMemoryCache()

// Apollo 클라이언트 생성
const apolloClient = new ApolloClient({
  link: httpLink,
  cache
})

export default apolloClient
