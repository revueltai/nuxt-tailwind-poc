<template>
  <c-button
    link="/"
    class="block"
  >
    <c-image
      :width="width"
      src="https://a.storyblok.com/f/47007/x/9c97278e39/testlogo.svg"
      alt="BrandNameGoesHere"
    />
  </c-button>
</template>

<script>
export default {
  name: 'CLogo',
  props: {
    width: {
      type: String,
      default: 'small'
    }
  }
}
</script>
