<template>
  <component
    :is="tag"
    v-if="content"
    :class="classes"
    class="c-markdown"
    v-html="contentSanitized"
  />
</template>

<script>
export default {
  name: 'CMarkdown',
  props: {
    content: {
      type: String,
      default: null
    },
    classes: {
      type: [String, Object],
      default: null
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    contentSanitized () {
      return this.$md.render(this.content)
    }
  }
}
</script>
