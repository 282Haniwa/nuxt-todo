<template>
  <div class="todo-card-root">
    <div class="todo-limit">
      <Limit :date="todo.limit" />
    </div>
    <div class="todo-card" @click="handleClick">
      <div class="todo-content">
        <CheckBox :label="todo.title" :value="todo.checked" />
        <div class="todo-category">{{ todo.category }}</div>
      </div>
      <div class="icon-menu">
        <IconButton
          :class="{ 'icon-button': true, 'with-detail': todo.detail }"
          icon="icon/alert"
          @click="handleClick"
        />
        <IconToggleButton
          :value="todo.favorite"
          icon="icon/favorite"
          active-color="#ffdf6f"
          @click="handleClickFavorite"
        />
        <IconButton class="icon-button" icon="icon/delete" @click="handleDelete" />
      </div>
    </div>
  </div>
</template>

<script>
import Limit from './Limit';
import IconButton from '~/components/Buttons/IconButton';
import IconToggleButton from '~/components/Buttons/IconToggleButton';
import CheckBox from '~/components/Inputs/CheckBox';

export default {
  name: 'TodoCard',
  components: {
    Limit,
    IconButton,
    IconToggleButton,
    CheckBox,
  },
  props: {
    todo: {
      type: Object,
      default: () => ({
        title: '',
        category: '',
        limit: new Date(),
        detail: '',
        checked: false,
        favorite: false,
      }),
    },
  },
  methods: {
    handleChangeCheck(value, event) {
      this.$emeit(
        'change',
        {
          ...this.todo,
          checked: value,
        },
        event
      );
    },
    handleClickFavorite(value, event) {
      this.$emit(
        'change',
        {
          ...this.todo,
          favorite: value,
        },
        event
      );
    },
    handleClick(event) {
      this.$emit('click', event);
    },
    handleDelete(event) {
      this.$emeit('delete', event);
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-card-root {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  width: 100%;
}

.todo-limit {
  margin-right: 24px;
}

.todo-card {
  position: relative;
  height: 84px;
  width: 100%;
  border: 1px solid $color-border;
  box-sizing: border-box;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
}

.todo-content {
  font-family: Sawarabi Gothic;
  font-style: normal;
  font-weight: normal;
  color: $color-text;
  letter-spacing: 0.05em;
  padding: 24px;
}

.todo-category {
  padding-left: 49px;
  font-size: 14px;
  height: 21px;
  line-height: 21px;
  color: $color-gray;
  text-align: left;
}

.icon-menu {
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
}

.icon-button {
  color: $color-gray;

  &.with-detail {
    color: #00ddeb;
  }
}
</style>
