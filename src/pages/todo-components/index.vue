<template>
  <div class="container">
    <div>Component list</div>
    <hr width="100%" />
    <span>Button</span>
    <Button variant="main">Button</Button>
    <Button variant="lime">Button</Button>
    <Button variant="white">Button</Button>
    <Button variant="outline">Button</Button>
    <Button icon="icon/edit" variant="main">Button</Button>
    <hr width="100%" />
  </div>
</template>

<script>
import Button from '~/components/Buttons/Button';

export default {
  components: { Button },
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
