<template>
  <div class="todo-item"
    :class="{ done }"
  >
    <span class="todo-item__checkbox"
      :class="{ done }"
    ></span>
    {{ content }}
    <span class="todo-item__tag"
      :style="{ backgroundColor: tag.color }"
    ></span>
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
    top: 8px;
    left: 8px;
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: $bgTertiary;

    &:hover {
      background-color: darken($bgTertiary, 10%);
    }

    &.done {
      background-color: $tint;
    }
  }

  &__tag {
    position: absolute;
    top: 15px;
    right: 15px;
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  &.done {
    text-decoration: line-through;
  }
}
</style>
