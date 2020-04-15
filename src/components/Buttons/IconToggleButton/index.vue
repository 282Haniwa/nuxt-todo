<template>
  <IconButton :icon="icon" :style="style" :variant="variant" @click="handleClick" />
</template>

<script>
import IconButton from '../IconButton';
import { getColor } from '~/utils/theme';

export default {
  name: 'IconToggleButton',
  components: { IconButton },
  props: {
    icon: {
      type: [String, null],
      default: null,
    },
    color: {
      type: String,
      default: 'gray',
    },
    activeColor: {
      type: String,
      default: 'main',
    },
    variant: {
      type: String,
      default: '',
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      active: this.value,
    };
  },
  computed: {
    style() {
      return {
        color: this.active ? getColor(this.activeColor) : getColor(this.color),
      };
    },
  },
  watch: {
    value(value) {
      this.active = value;
    },
  },
  methods: {
    handleClick(event) {
      this.active = !this.active;
      this.$emit('click', this.active, event);
    },
  },
};
</script>

<style lang="scss" scoped></style>
