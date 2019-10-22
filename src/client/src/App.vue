<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'app',
  async mounted () {
    const result = await this.$apollo.mutate({
      // Query
      mutation: gql`mutation ($userId: String!) {
        checkUserIdExist(userId: $userId)
      }`,
      // Parameters
      variables: {
        userId: 'test1234'
      }
    })

    console.log(result)
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
