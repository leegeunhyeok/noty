<template>
  <div class="drawer">
    <div class="drawer__menu" @click="onMenu('note')"
      v-show="!isActivate('note')"
    >Note</div>
    <div class="drawer__menu" @click="onMenu('todo')"
      v-show="!isActivate('todo')"
    >Todo</div>
    <div class="drawer__menu" @click="onMenu('tag')"
      v-show="!isActivate('tag')"
    >Tag</div>
    <div class="drawer__menu" @click="onMenu('setting')"
      v-show="!isActivate('setting')"
    >Setting</div>
    <div class="drawer__logout" @click="$emit('logout')">Logout</div>
  </div>
</template>

<script>
export default {
  name: 'drawer',
  computed: {
    currentMenu () {
      return this.$route.name
    }
  },
  methods: {
    isActivate (name) {
      return this.currentMenu === name
    },
    onMenu (name) {
      this.$emit('menu', name)
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/common';

.drawer {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  bottom: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 90px);
  background-color: $bgSecondary;
  z-index: 200;

  &__menu {
    cursor: pointer;
    width: 100%;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    color: $tint10;
    margin: 20px 0;

    &:hover {
      color: darken($tint10, 10%);
    }
  }

  &__logout {
    cursor: pointer;
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    color: $separator;

    &:hover {
      color: darken($separator, 10%);
    }
  }
}
</style>
