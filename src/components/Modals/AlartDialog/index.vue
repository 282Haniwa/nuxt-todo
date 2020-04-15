<template>
  <ModalBase class="alart-dialog-root" :open="open" @close="handleClose">
    <div class="alart-dialog">
      <div class="header">
        <div class="header-text">{{ title }}</div>
      </div>
      <div class="content">
        <slot />
      </div>
      <div class="footer">
        <div class="button-wrapper">
          <Button class="button" variant="outline" @click="handleCancel">{{ cancelText }}</Button>
          <Button class="button" variant="main" @click="handleAction">{{ actionText }}</Button>
        </div>
      </div>
    </div>
  </ModalBase>
</template>

<script>
import ModalBase from '../ModalBase';
import Button from '~/components/Buttons/Button';

export default {
  name: 'AlartDialog',
  components: {
    ModalBase,
    Button,
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    actionText: {
      type: String,
      default: '',
    },
    cancelText: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleClose(event) {
      this.$emit('close', event);
    },
    handleCancel(event) {
      this.$emit('cancel', event);
    },
    handleAction(event) {
      this.$emit('action', event);
    },
  },
};
</script>

<style lang="scss" scoped>
.alart-dialog-root {
  border-radius: 5px;
}

.alart-dialog {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 216px;
  width: 626px;
  background-color: $color-paper;
  border-radius: 5px;
}

.header {
  height: 50px;
  width: 100%;
  flex-grow: 0;
  border-radius: 5px;
  background-color: $color-main;
}

.header-text {
  padding: 8px 16px;
  font-family: Sawarabi Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 35px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: $color-paper;
}

.content {
  width: 100%;
  padding: 16px;
  color: $color-text;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-bottom: 16px;
  padding-right: 16px;
  display: flex;
  justify-content: flex-end;
  border-radius: 5px;
}

.button-wrapper {
  display: flex;
  flex-direction: row;
}

.button {
  margin-left: 16px;
}
</style>
