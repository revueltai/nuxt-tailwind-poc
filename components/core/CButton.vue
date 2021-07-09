<template>
  <span>
    <template v-if="isTag('button')">
      <component
        :is="sanitizedTag"
        :disabled="disabled"
        :class="cssClasses"
        role="button"
        @click="onClick"
      >
        <slot>
          {{ content }}
        </slot>
      </component>
    </template>

    <template v-else-if="isTag('scroll')">
      <a
        v-scroll-to="setScrollPosition(url)"
        :class="cssClasses"
        href="#"
      >
        <slot>
          {{ content }}
        </slot>
      </a>
    </template>

    <template v-else-if="isTag('a')">
      <component
        :is="sanitizedTag"
        :class="cssClasses"
        :href="url"
        :rel="rel"
        :target="target"
      >
        <slot>
          {{ content }}
        </slot>
      </component>
    </template>

    <template v-else>
      <component
        :is="sanitizedTag"
        :class="cssClasses"
        :to="url"
        exact
      >
        <slot>
          {{ content }}
        </slot>
      </component>
    </template>
  </span>
</template>

<script>
import { mapGetters } from 'vuex'
import { isObject } from '~/plugins/utils.js'
import { shapes, modes, themes } from '~/configs/dictionary/CButton.json'
import { textAlignments, fontSizes } from '~/configs/dictionary/Shared.json'

export default {
  name: 'CButton',
  props: {
    content: {
      type: String,
      default: null
    },
    link: {
      type: [String, Object],
      default: null
    },
    tag: {
      type: String,
      default: null
    },
    openInNewTab: {
      type: Boolean,
      default: false
    },
    noFollow: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: [Boolean, Object],
      default: false
    },
    textAlignment: {
      type: String,
      default: 'center'
    },
    fontSize: {
      type: String,
      default: 'medium'
    },
    shape: {
      type: String,
      default: 'square'
    },
    mode: {
      type: String,
      default: 'none'
    },
    theme: {
      type: String,
      default: 'dark'
    }
  },
  computed: {
    ...mapGetters(['headerHeight']),

    scrollDuration () {
      return 600
    },

    scrollOffset () {
      return 0
    },

    sanitizedTag () {
      if (this.tag) {
        return this.tag
      }

      if (!this.url) {
        return 'span'
      }

      if (this.url.match(/^#/)) {
        return 'scroll'
      }

      if (this.url.match(/^(http(s)?):\/\//)) {
        return 'a'
      }

      if (this.$nuxt) {
        return 'nuxt-link'
      }

      if (this.$router) {
        return 'router-link'
      }

      return 'button'
    },

    target () {
      return this.openInNewTab ? '_blank' : '_self'
    },

    rel () {
      if (this.noFollow && this.openInNewTab) {
        return 'noopener nofollow external'
      }

      if (this.noFollow) {
        return 'nofollow external'
      }

      return 'external'
    },

    url () {
      if (isObject(this.link)) {
        return this.link.cached_url || this.link.url
      }

      return this.link
    },

    cssClasses () {
      const classes = [
        'inline-flex',
        'transition-colors duration-300 ease-in-out',
        `rounded-${shapes[this.shape]}`,
        textAlignments[this.textAlignment],
        fontSizes[this.fontSize],
        this.sanitizedMode,
        this.sanitizedTheme
      ]

      if (this.isTag('a') && this.disabled) {
        classes.push('disabled')
      }

      return classes
    },

    sanitizedMode () {
      switch (modes[this.mode]) {
        case 'solid':
          return 'px-8 py-3 border'

        case 'ghost':
          return 'px-8 py-3 border'

        default:
          return ''
      }
    },

    sanitizedTheme () {
      const isGhostMode = modes[this.mode] === 'ghost'
      const isSolidMode = modes[this.mode] === 'solid'
      const theme = themes[this.theme]
      const colors = {
        transparent: 'transparent',
        white: 'white',
        primary: 'blue-900',
        secondary: 'purple-700',
        tertiary: 'gray-500'
      }
      let states = {}

      if (theme === 'dark') {
        if (isSolidMode) {
          states = {
            default: {
              border: colors.primary,
              bg: colors.primary,
              text: colors.white
            },
            hover: {
              border: colors.secondary,
              bg: colors.secondary,
              text: colors.white
            }
          }
        } else if (isGhostMode) {
          states = {
            default: {
              border: colors.primary,
              bg: colors.transparent,
              text: colors.primary
            },
            hover: {
              border: colors.secondary,
              bg: colors.transparent,
              text: colors.secondary
            }
          }
        } else {
          states = {
            default: {
              border: 'none',
              bg: colors.transparent,
              text: colors.tertiary
            },
            hover: {
              border: 'none',
              bg: colors.transparent,
              text: colors.secondary
            }
          }
        }
      } else if (theme === 'light') {
        if (isSolidMode) {
          states = {
            default: {
              border: colors.white,
              bg: colors.white,
              text: colors.primary
            },
            hover: {
              border: colors.tertiary,
              bg: colors.tertiary,
              text: colors.primary
            }
          }
        } else if (isGhostMode) {
          states = {
            default: {
              border: colors.white,
              bg: colors.transparent,
              text: colors.white
            },
            hover: {
              border: colors.secondary,
              bg: colors.transparent,
              text: colors.secondary
            }
          }
        } else {
          states = {
            default: {
              border: 'none',
              bg: colors.transparent,
              text: colors.white
            },
            hover: {
              border: 'none',
              bg: colors.transparent,
              text: colors.secondary
            }
          }
        }
      }

      return `bg-${states.default.bg} text-${states.default.text} border-${states.default.border} hover:bg-${states.hover.bg} hover:text-${states.hover.text} hover:border-${states.hover.border}`
    }
  },
  methods: {
    isTag (type) {
      return type === this.sanitizedTag
    },

    setScrollPosition (url) {
      return {
        el: url,
        duration: 600,
        offset: -(this.headerHeight)
      }
    },

    onClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>
