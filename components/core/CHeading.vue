<template>
  <div
    :class="cssClasses"
    class="w-full"
  >
    <component
      :is="overlineTag"
      v-if="overline"
      :class="overlineClasses"
      class="block"
    >
      {{ overline }}
    </component>

    <component
      :is="headingTag"
      v-if="heading"
      :class="headingClasses"
    >
      {{ heading }}
    </component>

    <c-markdown
      v-if="description"
      :class="descriptionClasses"
      :content="description"
    />
  </div>
</template>

<script>
import { themes } from '~/configs/dictionary/CHeading.json'
import { fontWeights, fontSizes, textAlignments } from '~/configs/dictionary/Shared.json'

export default {
  name: 'CHeading',
  props: {
    overline: {
      type: String,
      default: null
    },
    overlineTag: {
      type: String,
      default: 'p'
    },
    overlineFontSize: {
      type: String,
      default: 'small'
    },
    overlineFontWeight: {
      type: String,
      default: 'normal'
    },
    overlineTextAlignment: {
      type: String,
      default: 'left'
    },
    heading: {
      type: String,
      default: null
    },
    headingTag: {
      type: String,
      default: 'h2'
    },
    headingFontSize: {
      type: String,
      default: 'large'
    },
    headingFontWeight: {
      type: String,
      default: 'bold'
    },
    headingTextAlignment: {
      type: String,
      default: 'left'
    },
    description: {
      type: String,
      default: null
    },
    descriptionTextAlignment: {
      type: String,
      default: 'left'
    },
    hasDivider: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'dark'
    }
  },
  computed: {
    cssClasses () {
      return [
        themes[this.theme]
      ]
    },

    overlineClasses () {
      return [
        fontWeights[this.overlineFontWeight],
        fontSizes[this.overlineFontSize],
        themes[this.theme],
        textAlignments[this.overlineTextAlignment]
      ]
    },

    headingClasses () {
      return [
        fontWeights[this.headingFontWeight],
        fontSizes[this.headingFontSize],
        themes[this.theme],
        textAlignments[this.headingTextAlignment]
      ]
    },

    descriptionClasses () {
      const output = [
        themes[this.theme],
        textAlignments[this.descriptionTextAlignment]
      ]

      if (this.hasDivider) {
        output.push('mt-3 pt-3 border-t border-opacity-25')
      }

      return output
    }
  }
}
</script>
