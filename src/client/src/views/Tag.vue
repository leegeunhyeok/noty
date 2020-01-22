<template>
  <div class="tag">
    <TagItem v-for="{ id, name, color } in tags"
      :name="name"
      :color="color"
      :key="id"
    />
    <ControlButton @click="toggleTagInput"
      :style="{ 'transform': showTag ?
        'translateX(-50%) rotate(45deg)' : 'translateX(-50%) ' }"
    />
    <transition name="fade" mode="out-in">
      <div class="tag__input" v-if="showTag">
        <div class="tag__input__item">
          <input v-model="tagName" placeholder="Name">
        </div>
        <div class="tag__input__item">
          <input v-model="color" placeholder="Color">
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import TagItem from '@/components/TagItem'
import ControlButton from '@/components/ControlButton'
import gql from 'graphql-tag'

export default {
  name: 'tag',
  components: {
    TagItem,
    ControlButton
  },
  data () {
    return {
      tags: [],
      showTag: false,
      tagName: '',
      color: ''
    }
  },
  created () {
    this.getTags()
  },
  methods: {
    async getTags () {
      const { data } = await this.$apollo.mutate({
        // Query
        mutation: gql`query {
          userTag {
            id
            name
            color
          }
        }`
      })

      this.tags = data.userTag
    },
    toggleTagInput () {
      if (this.showTag && this.tagName && this.color) {
        this.addTag(this.tagName, this.color)
      }
      this.tagName = ''
      this.color = ''
      this.showTag = !this.showTag
    },
    async addTag (name, color) {
      const { data } = await this.$apollo.mutate({
        // Query
        mutation: gql`mutation ($name: String!, $color: String!) {
          createTag(name: $name, color: $color) {
            id,
            name,
            color
          }
        }`,
        variables: {
          name,
          color
        }
      })

      this.tags.unshift(data.createTag)
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/common';

.tag {
  @include page;

  &__input {
    position: fixed;
    top: 50%;
    left: 50%;
    max-width: 400px;
    width: 80%;
    padding: 1rem;
    background-color: $bgSecondary;
    box-shadow: 0 0 5px rgba(0, 0, 0, .3);
    border-radius: 5px;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);

    &__item {
      input {
        outline: none;
        padding: 5px 10px;
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
}
</style>
