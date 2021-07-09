<template>
  <c-section
    ref="header"
    :class="cssClasses"
    tag="header"
    vertical-padding="none"
    class="fixed z-50 w-full bg-white border-t duration-500 transition-all"
  >
    <div class="flex flex-row items-start justify-between">
      <c-logo />

      <nav class="flex h-full items-center justify-center">
        <c-button
          v-for="navItem in navigation"
          :key="navItem.id"
          :link="navItem.link"
          class="ml-4"
        >
          {{ navItem.name }}
        </c-button>
      </nav>
    </div>
  </c-section>
</template>

<script>
import navigations from '~/configs/navigations.json'
import CLogo from '~/components/partials/CLogo.vue'

export default {
  name: 'CHeader',
  components: {
    CLogo
  },

  data () {
    return {
      scrollActive: false
    }
  },

  computed: {
    cssClasses () {
      return {
        'shadow-md': this.scrollActive
      }
    },

    navigation () {
      return navigations.main
    }
  },

  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
    this.setHeight()
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll () {
      this.scrollActive = window.scrollY > 0
    },

    setHeight () {
      const headerRef = this.$refs.header.$el
      this.$store.dispatch('setHeaderHeight', headerRef.getBoundingClientRect().height)
    }
  }
}
</script>
