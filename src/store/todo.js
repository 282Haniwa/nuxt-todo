const convertTodoData = (todo) => ({
  ...todo,
  limit: new Date(todo.limit),
  created_at: new Date(todo.created_at),
});

export const state = () => ({
  todoList: [],
  categories: [],
});

export const mutations = {
  setTodoList(state, list) {
    state.todoList = list;
  },
  setCategories(state, categories) {
    state.categories = categories;
  },
};

export const actions = {
  async getTodoList({ commit }) {
    const response = await this.$axios.$get('/tasks');
    commit(
      'setTodoList',
      response.map((todo) => convertTodoData(todo))
    );
  },
  async addTodo({ commit, state }, data) {
    const response = await this.$axios.$post('/tasks', data);
    commit('setTodoList', [...state.todoList, convertTodoData(response)]);
  },
  async getCategories({ commit }) {
    const response = await this.$axios.$get('/categories');
    commit('setCategories', response);
  },
};
