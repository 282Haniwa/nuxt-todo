export const state = () => ({
  todoList: [],
});

export const mutations = {
  setTodoList(state, list) {
    state.todoList = list;
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
};
