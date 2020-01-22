<template>
  <div class="tag-item"
    :style="{ color }"
  >
    <span :style="{ backgroundColor: color }"></span>
    {{ name }}
    <div class="close"></div>
  </div>
</template>

<script>
export default {
  name: 'tag-item',
  props: {
    name: String,
    color: String
  }
}
</script>

<style lang="scss">
@import '@/styles/common';

.tag-item {
  position: relative;
  width: 100%;
  height: 40px;
  padding: 10px;
  background-color: $bgSecondary;
  margin-bottom: 20px;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;

  span {
    position: absolute;
    top: 10px;
    left: 10px;
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  .close {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 16px;
    color: $fgTertiary;
    font-weight: bold;

    &::before {
      content: 'x';
    }
  }
}
</style>
