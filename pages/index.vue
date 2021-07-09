<template>
  <div>
    <c-section
      vertical-padding="xlarge"
      bg-color="primary"
    >
      <c-grid>
        <c-column>
          <c-image
            width="large"
            src="https://a.storyblok.com/f/47007/x/9c97278e39/testlogo.svg"
            alt="BrandNameGoesHere"
          />
        </c-column>
      </c-grid>
    </c-section>

    <c-section
      id="about"
      vertical-padding="xlarge"
    >
      <c-grid>
        <c-column
          horizontal-padding="xlarge"
        >
          <c-heading
            overline="Hello Nuxt!"
            heading="This is a POC to show that Tailwind does not render the styles when running 'yarn generate'"
            heading-font-size="xlarge"
            description="I presume that the styles are being **Purged incorrectly**, but all tests I did failed to solve the issue :("
          />
        </c-column>
      </c-grid>
    </c-section>

    <c-section
      id="findings"
      bg-gradient="secondary"
      vertical-padding="xlarge"
    >
      <c-grid>
        <c-column
          class="mb-10"
        >
          <c-heading
            heading="Findings"
            heading-text-alignment="center"
            heading-font-size="xlarge"
          />
        </c-column>
      </c-grid>

      <c-grid
        columns-width="half"
      >
        <c-column
          v-for="col in 2"
          :key="col"
          horizontal-padding="xlarge"
        >
          <c-heading
            heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            heading-font-size="large"
            description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </c-column>
      </c-grid>
    </c-section>

    <c-section
      id="rankings"
      vertical-padding="xlarge"
    >
      <c-grid>
        <c-column
          class="mb-10"
        >
          <c-heading
            heading="Rankings"
            heading-text-alignment="center"
            heading-font-size="xlarge"
          />
        </c-column>
      </c-grid>

      <c-grid
        columns-width="half"
        columns-gap="large"
      >
        <c-column
          v-for="col in 4"
          :key="col"
          horizontal-padding="xlarge"
        >
          <c-icon
            name="heart"
            size="large"
          />

          <c-heading
            heading="Lorem ipsum dolor sit amet"
            description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          />
        </c-column>
      </c-grid>
    </c-section>

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
            heading="Contact Us"
            heading-text-alignment="center"
            heading-font-size="xlarge"
          />
        </c-column>
      </c-grid>

      <c-grid>
        <c-column>
          <c-heading
            theme="light"
            heading-text-alignment="center"
            heading="Any help to sort out the styling issue is appreciated!!"
          />
        </c-column>
      </c-grid>
    </c-section>
  </div>
</template>

<script>
import CColumn from '~/components/core/CColumn.vue'
import CIcon from '~/components/core/CIcon.vue'
export default {
  components: { CColumn, CIcon },
  name: 'PageIndex'
}
</script>
