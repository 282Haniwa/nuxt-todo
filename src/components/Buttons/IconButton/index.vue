<template>
  <button
    :class="{ 'icon-button-root': true, 'with-icon': icon, [`variant-${variant}`]: true }"
    @click="handleClick"
  >
    <div v-if="icon" :height="height" :width="width" class="icon-wrapper">
      <SvgImage class="icon" :name="icon" />
    </div>
  </button>
</template>

<script>
import SvgImage from '~/components/SvgImage';

export default {
  name: 'IconButton',
  components: { SvgImage },
  props: {
    icon: {
      type: [String, null],
      default: null,
    },
    variant: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '24px',
    },
    width: {
      type: String,
      default: '24px',
    },
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-button-root {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 4px;
  color: inherit;
  background-color: transparent;

  &.variant-main {
    color: $color-paper;
    background-color: $color-main;
  }

  &.variant-lime {
    color: $color-text;
    background-color: $color-lime;
  }

  &.variant-white {
    color: $color-main;
    background-color: $color-paper;
  }

  &.variant-outline {
    color: $color-text;
    background-color: $color-paper;
    border: 1px solid $color-border;
  }

  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
