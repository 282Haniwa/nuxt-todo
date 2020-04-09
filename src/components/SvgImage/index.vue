<template>
  <component :is="svg" />
</template>

<script>
export default {
  name: 'SvgImage',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    svg() {
      return () => import(`~/assets/img/${this.name}.svg`);
    },
  },
};
</script>
