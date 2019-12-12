<template>
  <div class="tag">
    <TagItem v-for="{ id, name, color } in tags"
      :name="name"
      :color="color"
      :key="id"
    />
  </div>
</template>

<script>
import TagItem from '@/components/TagItem'
import gql from 'graphql-tag'

export default {
  name: 'tag',
  components: {
    TagItem
  },
  data () {
    return {
      tags: []
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
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/common';

.tag {
  @include page;
}
</style>
