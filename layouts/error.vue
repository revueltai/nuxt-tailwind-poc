<template>
  <c-section
    id="contact"
    vertical-padding="xlarge"
    bg-color="tertiary"
  >
    <c-grid>
      <c-column
        class="mb-10"
      >
        <c-heading
          theme="light"
          heading="Oops, page not found."
          heading-text-alignment="center"
          heading-font-size="xlarge"
        />
      </c-column>
    </c-grid>
  </c-section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LayoutsError',
  computed: {
    ...mapGetters(['headerHeight']),

    topOffset () {
      return `--pt: ${this.headerHeight}px`
    }
  },
  mounted () {
    document.body.setAttribute('data-error-page', 'error-page')
    document.addEventListener('keydown', this.onKeyDown)
  },
  beforeDestroy () {
    document.body.removeAttribute('data-error-page')
    document.removeEventListener('keydown', this.onKeyDown)
  },
  methods: {
    goHome () {
      this.$router.push({ name: 'index' })
    },
    onKeyDown (event) {
      if (event.keyCode === 8) {
        this.goHome()
      }
    }
  }
}
</script>
