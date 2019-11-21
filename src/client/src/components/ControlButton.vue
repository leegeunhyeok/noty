<template>
  <button class="control-button"
    @click="$emit('click')"
  >+</button>
</template>

<script>
export default {
  name: 'control-button'
}
</script>

<style lang="scss">
@import '@/styles/common';

.control-button {
  cursor: pointer;
  position: fixed;
  bottom: 25px;
  left: 50%;
  width: 50px;
  height: 50px;
  font-size: 30px;
  font-weight: bold;
  line-height: 50px;
  border-radius: 50%;
  border: none;
  outline: none;
  color: $onTint;
  background-color: $tint;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);

  &:hover {
    background-color: darken($tint, 10%);
  }
}
</style>
