<docs>
# チェックボックス
</docs>

<template>
  <div class="check-box-root">
    <label class="label">
      <input hidden :value="checked" type="checkbox" @change="handleChange" />
      <div v-show="!checked" class="checkbox">
        <SvgImage name="check/box" />
      </div>
      <div v-show="checked" class="checkbox">
        <SvgImage name="check/check" />
      </div>
      {{ label }}
    </label>
  </div>
</template>

<script>
import SvgImage from '../../SvgImage';
export default {
  name: 'CheckBox',
  components: {
    SvgImage,
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      checked: this.value,
    };
  },
  methods: {
    handleChange(event) {
      this.checked = event.target.checked;
      this.$emit('change', event.target.checked, event);
    },
  },
};
</script>

<style lang="scss" scoped>
.check-box-root {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  font-family: Sawarabi Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.05em;
  color: $color-text;
}

.label {
  display: block;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.checkbox {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  padding-right: 24px;
  cursor: pointer;
}
</style>
