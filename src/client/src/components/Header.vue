<template>
  <div class="header">
    <div class="header__title">{{ title }}</div>
    <div class="header__menu">
      <div class="header__menu__row">
        <span></span>
        <span></span>
      </div>
      <div class="header__menu__row">
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="header__search">
      <input type="text" placeholder="Search">
    </div>
  </div>
</template>

<script>
export default {
  name: 'noty-header',
  props: {
    title: String
  }
}
</script>

<style lang="scss">
@import '@/styles/common';

.header {
  position: fixed;
  width: 100%;
  height: 160px;
  padding: 30px;
  background-color: $bgSecondary;
  border-bottom: 1px solid $separator;

  &__title {
    color: $tint;
    font-size: 3rem;
    font-weight: bold;
  }

  &__menu {
    position: absolute;
    top: 40px;
    right: 30px;
    width: 36px;
    height: 36px;

    &:hover {
      span {
        background-color: darken($tint, 10%);
      }
    }

    &__row {
      cursor: pointer;
      float: left;

      span {
        float: left;
        width: 14px;
        height: 14px;
        margin: 2px;
        background-color: $tint;
        border-radius: 4px;
      }
    }
  }

  &__search {
    input {
      outline: none;
      padding: 10px 20px;
      margin: 10px 0;
      width: 100%;
      border: none;
      border-radius: 5px;
      background-color: $bgTertiary;
      font-size: 1.4rem;

      &::placeholder {
        color: $placeholder;
      }
    }
  }
}
</style>
