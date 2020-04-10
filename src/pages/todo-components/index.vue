<template>
  <div class="container">
    <div>Component list</div>
    <hr width="100%" />
    <span>TextArea</span>
    <TextArea label="ラベル" />
    <hr width="100%" />
  </div>
</template>

<script>
import TextArea from '~/components/Inputs/TextArea';

export default {
  components: { TextArea },
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
