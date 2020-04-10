<template>
  <div class="container">
    <div>Component list</div>
    <hr width="100%" />

    <span>TextField</span>
    <TextField label="ラベル" />
    <hr width="100%" />

    <span>TextArea</span>
    <TextArea label="ラベル" />
    <hr width="100%" />

    <span>Button</span>
    <Button variant="main">Button</Button>
    <Button variant="lime">Button</Button>
    <Button variant="white">Button</Button>
    <Button variant="outline">Button</Button>
    <Button icon="icon/edit" variant="main">Button</Button>
    <hr width="100%" />

    <span>ModalBase</span>
    <Button variant="main" @click="openModalBase">Open Modal</Button>
    <ModalBase :open="modalBaseOpen" @close="closeModalBase">ModalBase</ModalBase>
    <hr width="100%" />
  </div>
</template>

<script>
import TextField from '~/components/Inputs/TextField';
import TextArea from '~/components/Inputs/TextArea';
import Button from '~/components/Buttons/Button';
import ModalBase from '~/components/Modals/ModalBase';

export default {
  components: { TextField, TextArea, Button, ModalBase },
  data() {
    return {
      modalBaseOpen: false,
    };
  },
  methods: {
    openModalBase() {
      this.modalBaseOpen = true;
    },
    closeModalBase() {
      this.modalBaseOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 300px;

  & > * {
    margin-bottom: 32px;
  }
}
</style>
