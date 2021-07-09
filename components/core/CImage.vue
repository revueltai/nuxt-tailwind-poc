<template>
  <span
    :class="cssClasses"
    class="overflow-hidden inline-flex"
  >
    <img
      ref="image"
      :alt="alt"
      :class="classes"
      @load="onLoad"
    >
  </span>
</template>

<script>
import { isObject } from '~/plugins/utils.js'
import { roundness, sizes } from '~/configs/dictionary/CImage.json'
import { shadows } from '~/configs/dictionary/Shared.json'

export default {
  name: 'CImage',
  props: {
    src: {
      type: [String, Object],
      required: true
    },
    classes: {
      type: [String, Object],
      default: null
    },
    alt: {
      type: String,
      default: ''
    },
    borderRoundness: {
      type: String,
      default: 'none'
    },
    shadow: {
      type: String,
      default: 'none'
    },
    width: {
      type: String,
      default: 'medium'
    },
    height: {
      type: String,
      default: 'none'
    },
    rootEl: {
      type: [String, Object, Array],
      default: null
    },
    rootMargin: {
      type: String,
      default: '0px'
    },
    threshold: {
      type: Number,
      default: 0
    },
    hasBorder: {
      type: Boolean,
      default: false
    },
    hasLazyLoad: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      observer: null,
      isLoaded: false
    }
  },
  computed: {
    cssClasses () {
      const output = [
        `rounded-${roundness[this.borderRoundness]}`,
        shadows[this.shadow]
      ]

      const width = sizes[this.width]
      if (width) {
        output.push(`w-${width}`)
      }

      const height = sizes[this.height]
      if (height) {
        output.push(`h-${height}`)
      }

      if (this.hasBorder) {
        output.push('border border-gray-400')
      }

      if (this.hasLazyLoad) {
        output.push({
          '--lazy': true,
          '--is-loaded': this.isLoaded
        })
      }

      return output
    },

    srcImage () {
      let src = this.src

      if (isObject(this.src)) {
        src = this.src.filename
      }

      return src
    }
  },
  mounted () {
    if (this.hasLazyLoad) {
      this.lazyLoadImage()
    } else {
      this.appendSrc()
    }
  },
  beforeDestroy () {
    if (this.hasLazyLoad) {
      this.observer.disconnect()
    }
  },
  methods: {
    lazyLoadImage () {
      this.observer = new IntersectionObserver((entries) => {
        const image = entries[0]

        if (image.isIntersecting) {
          this.observer.disconnect()
          this.appendSrc()
        }
      }, {
        root: this.rootEl,
        rootMargin: this.rootMargin,
        threshold: this.threshold
      })

      this.observer.observe(this.$el)
    },

    appendSrc () {
      const image = this.$refs.image
      image.src = this.srcImage

      this.watchRendering(image)
    },

    watchRendering (image) {
      const interval = setInterval(() => {
        if (image.naturalWidth > 0 && image.naturalHeight > 0) {
          clearInterval(interval)
        }
      }, 100)
    },

    onLoad () {
      this.isLoaded = true
    }
  }
}
</script>
