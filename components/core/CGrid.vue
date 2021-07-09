<template>
  <div
    :class="cssClasses"
    class="grid grid-cols-1"
  >
    <slot>
      <component
        :is="sanitizeChilds(column.component)"
        v-for="column in columns"
        :key="column._uid"
        v-editable="column"
        v-bind="column"
      />
    </slot>
  </div>
</template>

<script>
import { formatComponentName } from '~/plugins/utils.js'
import { columnGaps, columnWidths } from '~/configs/dictionary/CGrid.json'

export default {
  name: 'CGrid',
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    classes: {
      type: [String, Object],
      default: null
    },
    columnsWidth: {
      type: String,
      default: 'full'
    },
    columnsGap: {
      type: String,
      default: 'none'
    }
  },
  computed: {
    cssClasses () {
      const output = []

      const gap = columnGaps[this.columnsGap]
      if (gap) {
        output.push(`gap-${gap}`)
      }

      const width = columnWidths[this.columnsWidth]
      if (width) {
        output.push(`sm:grid-cols-${width}`)
      }

      return output
    }
  },
  methods: {
    sanitizeChilds (componentName) {
      return formatComponentName(componentName)
    }
  }
}
</script>
