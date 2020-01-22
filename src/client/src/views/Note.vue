<template>
  <div class="note">
    <div class="note__list">
      <NoteItem v-for="note in notes"
        :title="note.title"
        :content="note.content"
        :createdAt="note.createdAt"
        :updatedAt="note.updatedAt"
        :key="note.id"
      />
    </div>
    <ControlButton @click="addNote"/>
    <transition name="fade" mode="out-in">
      <NoteEdit @save="noteSave" @close="showEdit = false" v-if="showEdit"/>
    </transition>
  </div>
</template>

<script>
import NoteItem from '@/components/NoteItem'
import NoteEdit from '@/components/NoteEdit'
import ControlButton from '@/components/ControlButton'
import gql from 'graphql-tag'

export default {
  name: 'note',
  components: {
    NoteItem,
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
    async noteSave ({ title, content }) {
      const { data } = await this.$apollo.mutate({
        // Query
        mutation: gql`mutation ($title: String!, $content: String!) {
          createNote(title: $title, content: $content) {
            id,
            title,
            content,
            createdAt,
            updatedAt
          }
        }`,
        variables: {
          title,
          content
        }
      })

      this.notes.unshift(data.createNote)
      this.showEdit = false
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/common';

.note {
  @include page;
  overflow-y: auto;
}
</style>
