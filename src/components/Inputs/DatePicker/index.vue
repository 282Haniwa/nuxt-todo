<docs>
# テキスト入力フォーム
</docs>

<template>
  <div class="text-field-root">
    <div v-if="label" class="label-wrapper">
      <label class="label">{{ label }}</label>
    </div>
    <input
      :value="textValue"
      class="text-field"
      type="date"
      @change="handleChange"
      @input="handleInput"
    />
  </div>
</template>

<script>
import { format } from '~/utils/date';

export default {
  name: 'TextField',
  props: {
    value: {
      type: [Date, null],
      default: new Date(),
    },
    label: {
      type: String,
      default: '',
    },
  },
  computed: {
    textValue() {
      return this.value && format(this.value, 'YYYY-MM-DD');
    },
  },
  methods: {
    handleChange(event) {
      const date = event.target.value && new Date(event.target.value);
      this.$emit('change', date, event);
    },
    handleInput(event) {
      const date = event.target.value && new Date(event.target.value);
      this.$emit('input', date, event);
    },
  },
};
</script>

<style lang="scss" scoped>
.text-field-root {
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

.text-field {
  width: 100%;
  border: 1px solid $color-border;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 6px 11px 5px 11px;
  color: inherit;
}
</style>
