<template>
  <div :hidden="!open">
    <div class="overlay" @click="handleClickOvelay"></div>
    <div :class="{ modal: true, [position]: true }">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalBase',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: 'center',
    },
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeyDown);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.handleKeyDown);
  },
  methods: {
    handleClickOvelay(event) {
      this.$emit('close', 'clickOvelay', event);
    },
    handleKeyDown(event) {
      if (event.isComposing || event.keyCode === 229) {
        return;
      }
      // 押されたのがescキーだったとき閉じる
      if (event.keyCode === 27) {
        this.$emit('close', 'keyDownEsc', event);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: $z-index-modal;
}

.modal {
  position: fixed;
  z-index: $z-index-modal;

  &.center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &.top {
    top: 0;
    left: 0;
    width: 100vw;
  }

  &.bottom {
    left: 0;
    bottom: 0;
    width: 100vw;
  }

  &.right {
    top: 0;
    right: 0;
    height: 100vh;
  }

  &.left {
    top: 0;
    left: 0;
    height: 100vh;
  }
}
</style>
