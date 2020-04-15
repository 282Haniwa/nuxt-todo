<docs>
# セレクトボックス
</docs>

<template>
  <div class="select-box-root">
    <div v-if="label" class="label-wrapper">
      <label class="label">{{ label }}</label>
    </div>
    <div class="select-wrapper">
      <SvgImage class="icon" name="icon/expand" />
      <select id="" class="select" @change="handleChange">
        <slot />
      </select>
    </div>
  </div>
</template>

<script>
import SvgImage from '../../SvgImage';

export default {
  name: 'SelectBox',
  components: { SvgImage },
  props: {
    label: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleChange(event) {
      this.$emit('change', event.target.value, event);
    },
  },
};
</script>

<style lang="scss" scoped>
.select-box-root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  font-family: Sawarabi Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: $color-text;
  line-height: 21px;
  letter-spacing: 0.05em;
}

.label-wrapper {
  width: 100%;
}

.label {
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: inherit;
}

.select-wrapper {
  position: relative;
  width: 100%;
}

.icon {
  height: 32px;
  width: 32px;
  position: absolute;
  top: 50%;
  right: 8px;
  margin-top: -16px;
  z-index: -1;
  color: $color-gray;
}

.select {
  width: 100%;
  border: 1px solid $color-border;
  box-sizing: border-box;
  border-radius: 5px;
  min-width: 120px;
  padding: 6px 11px 5px 11px;
  color: inherit;
}
</style>
