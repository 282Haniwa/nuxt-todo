<template>
  <button :class="{ root: true, 'with-icon': icon, [`variant-${variant}`]: true }">
    <div v-if="icon" class="icon-wrapper">
      <SvgImage class="icon" :name="icon" />
    </div>
    <slot />
  </button>
</template>

<script>
import SvgImage from '~/components/SvgImage';

export default {
  name: 'Button',
  components: { SvgImage },
  props: {
    icon: {
      type: [String, null],
      default: null,
    },
    label: {
      type: String,
      default: '',
    },
    variant: {
      type: String,
      default: 'main',
    },
  },
};
</script>

<style lang="scss" scoped>
.root {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 114px;
  border-radius: 5px;
  padding: 5px 10px;

  &.with-icon {
    padding: 5px 34px;
  }

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
    position: absolute;
    left: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    width: 24px;
  }
}
</style>
