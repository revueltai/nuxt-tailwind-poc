<template>
  <c-image
    :src="image"
    :class="classes"
    :border-roundness="borderRoundness"
    :width="size"
    :height="size"
  />
</template>

<script>
import { shapes } from '~/configs/dictionary/CBadge.json'

export default {
  name: 'CBadge',
  props: {
    image: {
      type: [String, Object],
      required: true
    },
    shape: {
      type: String,
      default: 'circle'
    },
    size: {
      type: String,
      default: 'medium'
    }
  },
  computed: {
    borderRoundness () {
      return shapes[this.shape]
    }
  }
}
</script>
