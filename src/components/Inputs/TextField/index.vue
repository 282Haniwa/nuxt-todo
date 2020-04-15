<docs>
# テキスト入力フォーム
</docs>

<template>
  <div class="text-field-root">
    <div v-if="label" class="text-field-label-wrapper">
      <label class="text-field-label">{{ label }}</label>
    </div>
    <input
      class="text-field-input"
      :value="value"
      :type="type"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'TextField',
  props: {
    value: {
      type: [String, null],
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
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

.text-field-label-wrapper {
  width: 100%;
}

.text-field-label {
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: inherit;
}

.text-field-input {
  height: 100%;
  width: 100%;
  border: 1px solid $color-border;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 3% 6%;
  color: inherit;
}
</style>
