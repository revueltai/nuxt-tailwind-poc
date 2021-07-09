<template>
  <c-section
    tag="footer"
    vertical-padding="medium"
    class="border-t"
  >
    <c-column
      :direction="direction"
      vertical-alignment="start"
      horizontal-alignment="between"
    >
      <div class="text-center w-full mb-8 md:w-5/12 md:text-left md:mb-0">
        <c-logo />

        <p class="mt-1 text-sm text-gray-600">
          Copyright © SomeCompany {{ year }}
        </p>
      </div>

      <div class="w-full text-center md:text-right">
        <nav class="text-center md:text-right mb-4">
          <c-button
            v-for="navItem in navigation.primary"
            :key="navItem.id"
            :link="navItem.link"
            class="ml-4"
          >
            {{ navItem.name }}
          </c-button>
        </nav>

        <nav class="text-center md:text-right">
          <c-button
            v-for="navItem in navigation.secondary"
            :key="navItem.id"
            :link="navItem.link"
            font-size="small"
            class="ml-4"
          >
            {{ navItem.name }}
          </c-button>
        </nav>

        <nav class="text-center md:text-right mt-3">
          <c-button
            v-for="navItem in navigation.tertiary"
            :key="navItem.id"
            :link="navItem.link"
            :open-in-new-tab="true"
            font-size="medium"
            class="ml-4"
          >
            <c-icon
              :name="navItem.name"
              type="brand"
              size="medium"
            />
          </c-button>
        </nav>
      </div>
    </c-column>
  </c-section>
</template>

<script>
import navigations from '~/configs/navigations.json'
import CLogo from '~/components/partials/CLogo.vue'

export default {
  name: 'CFooter',
  components: {
    CLogo
  },
  computed: {
    year () {
      const d = new Date()
      return d.getFullYear()
    },

    direction () {
      //return this.isMdUp ? 'row' : 'column'
      return 'row'
    },

    navigation () {
      return {
        primary: navigations.main,
        secondary: navigations.secondary,
        tertiary: navigations.tertiary
      }
    }
  }
}
</script>
