<template>
  <div id="app">
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
@import '@/styles/common';

#app {
  @extend .wh-100;
}
</style>
