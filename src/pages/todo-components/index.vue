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

    <span>IconButton</span>
    <IconButton icon="icon/edit" variant="main" />
    <IconButton icon="icon/edit" variant="lime" />
    <IconButton icon="icon/edit" variant="white" />
    <IconButton icon="icon/edit" variant="outline" />
    <hr width="100%" />
  </div>
</template>

<script>
import TextField from '~/components/Inputs/TextField';
import TextArea from '~/components/Inputs/TextArea';
import Button from '~/components/Buttons/Button';
import IconButton from '~/components/Buttons/IconButton';

export default {
  components: { TextField, TextArea, Button, IconButton },
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
