<template>
  <div class="note">
    <div class="note__list">
      <div class="note__list__item" v-for="note in notes"
        :key="note.id"
      >
        <h1>{{ note.title }}</h1>
        <time>{{ date(note.createdAt) }}</time>
        <p v-html="note.content"></p>
      </div>
    </div>
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
    },
    numberPadding (n, length) {
      const sN = n.toString()
      if (sN.length >= length) {
        return sN
      } else {
        let p = ''
        for (let i = 0; i < length - sN.length; i++) {
          p += '0'
        }
        return p + sN
      }
    },
    date (target) {
      const $ = new Date(target)
      const y = $.getFullYear()
      const m = this.numberPadding($.getMonth() + 1, 2)
      const d = this.numberPadding($.getDate(), 2)

      return `${y}.${m}.${d}`
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/common';

.note {
  @include page;
  overflow-y: auto;

  &__list {
    &__item {
      padding: 10px 30px;
      border-radius: 5px;
      background-color: $bgSecondary;
      margin-bottom: 20px;

      h1 {
        margin-bottom: 0;
      }

      time {
        color: $fgTertiary;
      }

      p {
        color: $fgTertiary;
      }

      code {
        display: inline-block;
        padding: 0 .4rem;
        border-radius: 5px;
        font-weight: 700;
        background: $bgTertiary;
        color: $fgTertiary;
      }
    }
  }
}
</style>
