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
      const imgName = this.name;
      return () => import(`~/assets/img/${imgName}.svg`);
    },
  },
};
</script>
