<template>
  <div id="app">
    <transition name="header" mode="out-in">
      <Header :title="headerTitle" v-show="showHeader"/>
    </transition>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <transition>
      <Drawer v-show="showDrawer"/>
    </transition>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Drawer from '@/components/Drawer'

export default {
  name: 'app',
  components: {
    Header,
    Drawer
  },
  data () {
    return {
      showHeader: false,
      headerTitle: 'Header',
      showDrawer: true
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
