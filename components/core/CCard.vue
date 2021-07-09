<template>
  <div
    :class="cssClasses"
    class="flex bg-white w-full"
  >
    <slot>
      <component
        :is="sanitizeChilds(component.component)"
        v-for="component in content"
        :key="component._uid"
        v-editable="component"
        v-bind="component"
      />
    </slot>
  </div>
</template>

<script>
import { formatComponentName } from '~/plugins/utils.js'
import { roundness } from '~/configs/dictionary/CCard.json'
import { verticalPaddings, horizontalPaddings, shadows, alignments } from '~/configs/dictionary/Shared.json'

export default {
  name: 'CCard',
  props: {
    content: {
      type: Array,
      default: () => []
    },
    theme: {
      type: String,
      default: 'dark'
    },
    horizontalAlignment: {
      type: String,
      default: 'start'
    },
    verticalAlignment: {
      type: String,
      default: 'center'
    },
    verticalPadding: {
      type: String,
      default: 'none'
    },
    horizontalPadding: {
      type: String,
      default: 'none'
    },
    borderRoundness: {
      type: String,
      default: 'none'
    },
    shadow: {
      type: String,
      default: 'none'
    }
  },
  computed: {
    cssClasses () {
      return [
        `rounded-${roundness[this.borderRoundness]}`,
        `items-${alignments[this.verticalAlignment]}`,
        `justify-${alignments[this.horizontalAlignment]}`,
        shadows[this.shadow],
        verticalPaddings[this.verticalPadding],
        horizontalPaddings[this.horizontalPadding]
      ]
    }
  },
  methods: {
    sanitizeChilds (componentName) {
      return formatComponentName(componentName)
    }
  }
}
</script>
