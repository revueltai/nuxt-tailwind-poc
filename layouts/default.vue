<template>
  <div id="app">
    <c-header />

    <main
      :style="topOffset"
      role="main"
    >
      <Nuxt />
    </main>

    <c-footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CHeader from '~/components/partials/CHeader.vue'
import CFooter from '~/components/partials/CFooter.vue'

export default {
  name: 'LayoutsDefault',
  components: {
    CFooter,
    CHeader
  },
  computed: {
    ...mapGetters(['headerHeight']),

    topOffset () {
      return `--pt: ${this.headerHeight}px`
    }
  }
}
</script>
