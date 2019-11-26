<template>
  <div class="todo-item">
    <span class="todo-item__checkbox"
      :class="{ done }"
    ></span>
    {{ content }}
    <div class="close"></div>
  </div>
</template>

<script>
export default {
  name: 'todo-item',
  props: {
    initDone: Boolean,
    index: Number,
    content: String,
    tag: Object
  },
  date () {
    return {
      done: false
    }
  },
  created () {
    this.done = this.initDone
  }
}
</script>

<style lang="scss">
@import '@/styles/common';

.todo-item {
  position: relative;
  width: 100%;
  height: 40px;
  padding: 10px;
  background-color: $bgSecondary;
  margin-bottom: 20px;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;

  &__checkbox {
    cursor: pointer;
    position: absolute;
    top: 10px;
    left: 10px;
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: $bgTertiary;

    &:hover {
      background-color: darken($bgTertiary, 10%);
    }

    &.done {
      background-color: $tint;
    }
  }

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
    color: $fgTeriary;
    font-weight: bold;

    &::before {
      content: 'x';
    }
  }
}
</style>
