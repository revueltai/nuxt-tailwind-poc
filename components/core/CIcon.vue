<template>
  <font-awesome-icon
    :icon="[prefix, name]"
    :size="sanitizesSize"
    :class="cssClasses"
  />
</template>

<script>
import { sizes, themes, types } from '~/configs/dictionary/CIcon.json'

export default {
  name: 'CIcon',
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'small'
    },
    theme: {
      type: String,
      default: 'dark'
    },
    type: {
      type: String,
      default: 'solid'
    }
  },
  computed: {
    cssClasses () {
      return [
        // sizes[this.size],
        themes[this.theme]
      ]
    },
    sanitizesSize () {
      return sizes[this.size]
    },
    prefix () {
      return types[this.type]
    }
  }
}
</script>
