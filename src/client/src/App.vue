<template>
  <div id="app">
    <transition name="header" mode="out-in">
      <Header :title="headerTitle" v-if="showHeader"/>
    </transition>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Header from '@/components/Header'
import gql from 'graphql-tag'

export default {
  name: 'app',
  components: {
    Header
  },
  data () {
    return {
      showHeader: false,
      headerTitle: 'Header'
    }
  },
  watch: {
    '$route.name': {
      handler () {
        this.showHeader = !~this.$route.name.toLowerCase().indexOf('sign')
      },
      deep: true,
      immediate: true
    }
  },
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
  background-color: $bgPrimary;
}
</style>
