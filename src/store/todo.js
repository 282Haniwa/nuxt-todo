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
      response.map((todo) => ({
        ...todo,
        limit: new Date(todo.limit),
        created_at: new Date(todo.created_at),
      }))
    );
  },

  async getCategories({ commit }) {
    const response = await this.$axios.$get('/categories');
    commit('setCategories', response);
  },
};
