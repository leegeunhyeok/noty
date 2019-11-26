<template>
  <div class="tag">
    <TagItem v-for="({ name, color }, i) in tags"
      :name="name"
      :color="color"
      :key="i"
    />
  </div>
</template>

<script>
import TagItem from '@/components/TagItem'

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
    getTags () {
      // TODO: GraphQL 요청
      this.tags = [
        { name: 'Red', color: 'tomato' },
        { name: 'Yellow', color: '#ffdb58' },
        { name: 'Blue', color: 'dodgerblue' }
      ]
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
