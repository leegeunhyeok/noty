<template>
  <div class="drawer">
    <div class="drawer__menu">Note</div>
    <div class="drawer__menu">Todo</div>
    <div class="drawer__menu">Tag</div>
    <div class="drawer__menu">Setting</div>
    <div class="drawer__logout">Logout</div>
  </div>
</template>

<script>
export default {

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
