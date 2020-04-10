<docs>
# テキスト入力フォーム
</docs>

<template>
  <div class="root">
    <div v-if="label" class="label-wrapper">
      <label class="label">{{ label }}</label>
    </div>
    <textarea
      :value="value"
      class="text-field"
      type="text"
      resize="none"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
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
.root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 120px;
}

.label-wrapper {
  width: 100%;
}

.label {
  font-family: Sawarabi Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: $color-text;
}

.text-field {
  width: 100%;
  border: 1px solid $color-border;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: Sawarabi Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: $color-text;
  line-height: 21px;
  letter-spacing: 0.05em;
  padding: 6px 11px 5px 11px;
  color: inherit;
}
</style>
