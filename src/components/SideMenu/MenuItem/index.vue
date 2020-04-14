<template>
  <div :class="{ 'menu-item-root': true, disable: disable }">
    <TextField v-if="edit" class="edit-menu-item" :value="value" @change="handleChange" />
    <IconButton v-if="edit" class="delete-button" icon="icon/delete" @click="handleDelete" />
    <div v-if="!edit" class="menu-item-text" @click="handleClick">
      {{ value }}
    </div>
  </div>
</template>

<script>
import TextField from '~/components/Inputs/TextField';
import IconButton from '~/components/Buttons/IconButton';

export default {
  name: 'MenuItem',
  components: {
    TextField,
    IconButton,
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    edit: {
      type: Boolean,
      default: false,
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleChange(value) {
      this.$emit('change', value);
    },
    handleDelete(event) {
      this.$emit('delete', this.value, event);
    },
    handleClick(event) {
      if (!this.disable) {
        this.$emit('click', this.value, event);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-item-root {
  position: relative;
  height: 48px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
  cursor: pointer;

  &:hover {
    background-color: $hover-color;
    transition: $hover-transition;
  }

  &.disable {
    cursor: default;

    &:hover {
      background-color: unset;
      transition: unset;
    }
  }
}

.edit-menu-item {
  height: 32px;
  width: 90%;
  font-family: Raleway;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: inherit;
}

.delete-button {
  position: absolute;
  right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-item-text {
  height: 48px;
  width: 90%;
  line-height: 48px;
  font-family: Raleway;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: $color-text;
  letter-spacing: 0.05em;
  padding: 0 12px;
  color: inherit;
}
</style>
