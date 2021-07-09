<template>
  <div
    :class="cssClasses"
    class="w-full h-full flex"
  >
    <slot>
      <component
        :is="sanitizeChilds(child.component)"
        v-for="child in children"
        :key="child._uid"
        v-editable="child"
        v-bind="child"
      />
    </slot>
  </div>
</template>

<script>
import { formatComponentName } from '~/plugins/utils.js'
import { alignments, directions, verticalPaddings, horizontalPaddings } from '~/configs/dictionary/Shared.json'
import { childrenGaps } from '~/configs/dictionary/CColumn.json'

export default {
  name: 'CColumn',
  props: {
    children: {
      type: Array,
      default: () => []
    },
    classes: {
      type: [String, Object],
      default: null
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
    direction: {
      type: String,
      default: 'column'
    },
    childrenGap: {
      type: String,
      default: 'middle'
    }
  },
  computed: {
    cssClasses () {
      return [
        `items-${alignments[this.verticalAlignment]}`,
        `justify-${alignments[this.horizontalAlignment]}`,
        directions[this.direction],
        childrenGaps[this.childrenGap],
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
