<template>
  <div class="note-item">
    <h1>{{ title }}</h1>
    <time>{{ date(createdAt) }}</time>
    <p v-html="content"></p>
  </div>
</template>

<script>
export default {
  name: 'noteItem',
  props: {
    title: String,
    content: String,
    createdAt: String,
    upadtedAt: String
  },
  methods: {
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

.note-item {
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
</style>
