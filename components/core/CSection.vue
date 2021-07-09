<template>
  <component
    :is="tag"
    :class="cssClasses"
    :style="cssStyles"
    class="flex p-6"
  >
    <div
      class="container mx-auto max-w-screen-lg grid grid-cols-1"
      :class="sanitizedGap"
    >
      <slot>
        <component
          :is="sanitizeChilds(child.component)"
          v-for="child in content"
          :key="child._uid"
          v-editable="child"
          v-bind="child"
        />
      </slot>
    </div>
  </component>
</template>

<script>
import { formatComponentName } from '~/plugins/utils.js'
import { gaps, bgColors, bgGradients, bgSizes, bgPositions } from '~/configs/dictionary/CSection.json'
import { verticalPaddings, horizontalPaddings } from '~/configs/dictionary/Shared.json'

export default {
  name: 'CSection',
  props: {
    content: {
      type: Array,
      default: () => []
    },
    classes: {
      type: [String, Object],
      default: null
    },
    tag: {
      type: String,
      default: 'section'
    },
    verticalPadding: {
      type: String,
      default: 'none'
    },
    horizontalPadding: {
      type: String,
      default: 'none'
    },
    gap: {
      type: String,
      default: 'none'
    },
    bgColor: {
      type: String,
      default: 'full'
    },
    bgGradient: {
      type: String,
      default: 'none'
    },
    bgImage: {
      type: Object,
      default: null
    },
    bgPosition: {
      type: String,
      default: 'none'
    },
    bgSize: {
      type: String,
      default: 'auto'
    },
    bgRepeat: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    sanitizedGap () {
      return gaps[this.gap]
    },

    cssClasses () {
      const output = [
        verticalPaddings[this.verticalPadding],
        horizontalPaddings[this.horizontalPadding]
      ]

      const bgColor = bgColors[this.bgColor]
      if (bgColor) {
        output.push(bgColor)
      }

      const bgGradient = bgGradients[this.bgGradient]
      if (bgGradient) {
        output.push('bg-gradient-to-b')
        output.push(bgGradient)
      }

      if (this.bgImage) {
        const bgPosition = bgPositions[this.bgPosition]
        if (bgPosition) {
          output.push(bgPosition)
        }

        const bgSize = bgSizes[this.bgSize]
        if (bgSize) {
          output.push(bgSize)
        }

        if (this.bgRepeat) {
          output.push('bg-repeat')
        } else {
          output.push('bg-no-repeat')
        }
      }

      return output
    }
  },
  methods: {
    cssStyles () {
      const output = {
        backgroundImage: ''
      }

      if (this.bgImage) {
        const image = this.bgImage.filename

        if (image) {
          output.backgroundImage = `url('${image}')`
        }
      }

      return output
    },

    sanitizeChilds (componentName) {
      return formatComponentName(componentName)
    }
  }
}
</script>
