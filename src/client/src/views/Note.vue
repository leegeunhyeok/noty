<template>
  <div class="note">
    <ControlButton @click="addNote"/>
  </div>
</template>

<script>
import ControlButton from '@/components/ControlButton'
import gql from 'graphql-tag'

export default {
  name: 'note',
  components: {
    ControlButton
  },
  data () {
    return {
      page: 1,
      notes: [],
      isLastPage: false
    }
  },
  created () {
    this.fetchNote()
  },
  methods: {
    async fetchNote () {
      const { data } = await this.$apollo.mutate({
        // Query
        mutation: gql`query {
          userNote {
            id
            title
            content
            createdAt
            updatedAt
          }
        }`
      })

      this.notes = this.notes.concat(data.userNote)
    },
    addNote () {
      console.log('Add!')
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/common';

.note {
  @include page;
}
</style>
