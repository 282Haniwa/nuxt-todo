<docs>
# テキスト入力フォーム
</docs>

<template>
  <div class="text-area-root">
    <div v-if="label" class="label-wrapper">
      <label class="label">{{ label }}</label>
    </div>
    <textarea
      :value="value"
      class="text-area"
      type="text"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'TextArea',
  props: {
    value: {
      type: [String, null],
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.text-area-root {
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

.text-area {
  height: 100%;
  width: 100%;
  border: 1px solid $color-border;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 6px 11px 5px 11px;
  color: inherit;
  resize: none;
}
</style>
