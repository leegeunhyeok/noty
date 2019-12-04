<template>
  <div class="editor">
    <EditorContent class="editor__content" :editor="editor"/>
    <div class="editor__menu">
      <div class="editor__menu__item" @click="$emit('close')">Cancle</div>
      <div class="editor__menu__item" @click="save">Save</div>
    </div>
  </div>
</template>

<script>
import { Editor, EditorContent } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  History
} from 'tiptap-extensions'

export default {
  name: 'editor',
  components: {
    EditorContent
  },
  data () {
    return {
      html: '',
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3, 4, 5, 6] }),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Bold(),
          new Code(),
          new Italic(),
          new Link(),
          new History()
        ],
        onUpdate: ({ getHTML }) => {
          this.html = getHTML()
        }
      })
    }
  },
  computed: {
    currentMenu () {
      return this.$route.name
    }
  },
  beforeDestroy () {
    this.editor.destroy()
  },
  methods: {
    isActivate (name) {
      return this.currentMenu === name
    },
    onMenu (name) {
      this.$emit('menu', name)
    },
    save () {
      this.$emit('save', this.html)
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/common';

.editor {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  bottom: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 90px);
  background-color: $bgSecondary;
  z-index: 150;
  padding: 10px;

  &__content {
    position: relative;
    width: 100%;
    height: calc(100% - 80px);

    div {
      outline: none;
      height: 100%;
      border: 2px solid $tint10;
      border-radius: 5px;
      padding: 0 10px;

      p {
        code {
          display: inline-block;
          padding: 0 .4rem;
          border-radius: 5px;
          font-weight: 700;
          background: rgba(0, 0, 0, .1);
          color: rgba(0, 0, 0, .8);
        }
      }
    }
  }

  &__menu {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;

    &__item {
      cursor: pointer;
      color: $tint;
      padding: 10px 30px;
      font-size: 1.5rem;

      &:hover {
        color: darken($tint, 10%);
      }
    }
  }
}
</style>
