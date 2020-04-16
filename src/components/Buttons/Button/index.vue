<template>
  <button
    :class="{
      'button-root': true,
      'with-icon': icon,
      [`variant-${variant}`]: true,
      disabled: disabled,
    }"
    :disabled="disabled"
    @click="handleClick"
  >
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
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
      if (this.to) {
        this.$router.push(this.to);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.button-root {
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

    &.disabled {
      background-color: $color-gray;
    }
  }

  &.variant-lime {
    color: $color-text;
    background-color: $color-lime;

    &.disabled {
      color: $color-paper;
      background-color: $color-gray;
    }
  }

  &.variant-white {
    color: $color-main;
    background-color: $color-paper;

    &.disabled {
      color: $color-gray;
    }
  }

  &.variant-outline {
    color: $color-text;
    background-color: transparent;
    border: 1px solid $color-border;

    &.disabled {
      color: $color-gray;
    }
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
