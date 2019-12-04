<template>
  <div class="note">
    <ControlButton @click="addNote"/>
    <transition name="fade" mode="out-in">
      <NoteEdit @save="noteSave" @close="showEdit = false" v-if="showEdit"/>
    </transition>
  </div>
</template>

<script>
import NoteEdit from '@/components/NoteEdit'
import ControlButton from '@/components/ControlButton'
import gql from 'graphql-tag'

export default {
  name: 'note',
  components: {
    NoteEdit,
    ControlButton
  },
  data () {
    return {
      page: 1,
      notes: [],
      isLastPage: false,
      showEdit: false
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
      this.showEdit = true
    },
    noteSave ($event) {
      console.log($event)
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
