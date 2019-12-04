<template>
  <div id="app">
    <transition name="header" mode="out-in">
      <Header @drawer="showDrawer = !showDrawer"
        :title="headerTitle" v-show="showHeader"
      />
    </transition>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <transition name="fade" mode="out-in">
      <Drawer @menu="changeMenu" @logout="logout" v-show="showDrawer"/>
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
      headerTitle: '',
      showDrawer: false
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
  mounted () {
    this.setHeaderTitle(this.$route.name)
  },
  methods: {
    setHeaderTitle (text) {
      this.headerTitle = text.charAt(0).toUpperCase() + text.slice(1)
    },
    changeMenu ($event) {
      this.setHeaderTitle($event)
      this.$router.push({ path: '/' + $event })
      this.showDrawer = false
    },
    logout () {
      this.$store.commit('LOGOUT')
      this.$router.push({ path: '/signin' })
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
