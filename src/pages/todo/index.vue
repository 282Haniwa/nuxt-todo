<template>
  <div class="container">
    <SideMenu
      class="side-menu"
      :categories="categories"
      :selected="selected"
      @change="handleChangeSelected"
    />
    <div class="contents-wrapper">
      <div class="header">{{ selected }}</div>
      <div class="todo-wrapper">
        <div class="menu">
          <div class="label">Task</div>
          <div class="select-label">Sorted By</div>
          <SelectBox v-model="order" class="select-box">
            <option value="limit">Limit</option>
            <option value="created_at">Created At</option>
            <option value="category">Categories</option>
          </SelectBox>
          <div class="padding"></div>
          <Button class="button" icon="icon/add" variant="lime">Add Task</Button>
        </div>
        <div class="todo-list">
          <TodoCard
            v-for="todo in displayedTodoList"
            :key="todo.id"
            class="todo-item"
            :todo="todo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import SideMenu from '~/components/SideMenu/SideMenu';
import TodoCard from '~/components/Commons/TodoCard';
import Button from '~/components/Buttons/Button';
import SelectBox from '~/components/Inputs/SelectBox';

export default {
  components: {
    SideMenu,
    TodoCard,
    Button,
    SelectBox,
  },
  async fetch({ store, params }) {
    await store.dispatch('todo/getCategories');
    await store.dispatch('todo/getTodoList');
  },
  data() {
    return {
      selected: 'All',
      order: 'limit',
    };
  },
  computed: {
    todoList() {
      return this.$store.state.todo.todoList;
    },
    displayedTodoList() {
      let filteredTodoList = [];
      if (this.selected === 'All') {
        filteredTodoList = [...this.todoList];
      } else {
        filteredTodoList = [
          ...this.todoList.filter((todo) => {
            return todo.category === this.selected;
          }),
        ];
      }

      return filteredTodoList.sort((a, b) => {
        if (a[this.order] < b[this.order]) {
          return -1;
        }
        if (a[this.order] > b[this.order]) {
          return 1;
        }

        return 0;
      });
    },
    categories() {
      return this.$store.state.todo.categories;
    },
  },
  methods: {
    handleChangeSelected(value) {
      this.selected = value;
    },
    ...mapActions({
      getTodoList: 'todo/getTodoList',
      getCategories: 'todo/getCategories',
    }),
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.side-menu {
  flex-grow: 0;
  flex-shrink: 0;
}

.contents-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  height: 96px;
  width: 100%;
  padding: 0 32px;
  flex-grow: 0;
  flex-shrink: 0;
  border-bottom: 2px solid #dddddd;
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: $color-text;
}

.todo-wrapper {
  height: 100%;
  width: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.label {
  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: $color-text;
  margin-right: 24px;
}

.select-label {
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 8px;
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: $color-gray;
}

.select-box {
  font-family: Raleway;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;

  color: $color-gray;
}

.button {
  height: 32px;
  flex-grow: 0;
  flex-shrink: 0;
}

.padding {
  height: 100%;
  width: 100%;
}

.todo-list {
  width: 100%;
}

.todo-item {
  margin-bottom: 24px;
}
</style>
