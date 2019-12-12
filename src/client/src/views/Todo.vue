<template>
  <div class="todo">
    <div class="todo__control">
      <div class="todo__control__filter">
        <div class="todo__control__filter__item active">All</div>
        <div class="todo__control__filter__item">Active</div>
        <div class="todo__control__filter__item">Done</div>
      </div>
      <div class="todo__control__tag">
        <div class="todo__control__tag__selected">All tag</div>
        <div class="todo__control__tag__dropdown">
          <div class="dropdown__item active">Red</div>
          <div class="dropdown__item">Yellow</div>
          <div class="dropdown__item">Blue</div>
        </div>
      </div>
    </div>
    <div class="todo__items">
      <TodoItem v-for="({ done, index, content, tag }) in todos"
        :initDone="done"
        :index="index"
        :content="content"
        :tag="tag"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'

export default {
  name: 'todo',
  components: {
    TodoItem
  },
  data () {
    return {
      todos: []
    }
  },
  created () {
    this.getTodos()
  },
  methods: {
    getTodos () {
      // TODO: GraphQL 요청
      this.todos = [
        {
          tag: {
            color: 'tomato'
          },
          done: false,
          index: 1,
          content: 'TODO 1'
        },
        {
          tag: {
            color: '#ffdb58'
          },
          done: true,
          index: 2,
          content: 'TODO 2'
        },
        {
          tag: {
            color: 'dodgerblue'
          },
          done: true,
          index: 3,
          content: 'TODO 3'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/common';

.todo {
  @include page;

  &__control {
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin-bottom: 20px;

    &__filter {
      float: left;

      &__item {
        cursor: pointer;
        color: $fgTertiary;
        font-weight: bold;
        font-size: 1rem;
        float: left;
        margin-right: 16px;

        &:hover {
          color: darken($fgTertiary, 10%);
        }

        &.active {
          color: $tint;
        }
      }
    }

    &__tag {
      position: relative;
      float: right;

      &__selected {
        cursor: pointer;
        color: $tint;
        background-color: $bgSecondary;
        font-weight: bold;
        border: 1px solid $separator;
        border-radius: 5px;
        padding: 0 10px;
      }

      &__dropdown {
        position: absolute;
        top: 45px;
        right: 0;
        border: 1px solid $separator;
        border-radius: 5px;
        overflow: hidden;
        z-index: 1;

        .dropdown__item {
          cursor: pointer;
          width: 100px;
          color: $fgSecondary;
          background-color: $bgSecondary;
          padding: 5px;

          &:hover {
            background-color: darken($bgSecondary, 10%);
          }
        }
      }
    }
  }

  &__items {
    // EMPTY
  }
}
</style>
