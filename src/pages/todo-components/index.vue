<template>
  <div class="container">
    <div>Component list</div>
    <hr width="100%" />
    <span>TextField</span>
    <TextField label="ラベル" />
    <hr width="100%" />
  </div>
</template>

<script>
import TextField from '~/components/Inputs/TextField';

export default {
  components: { TextField },
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
