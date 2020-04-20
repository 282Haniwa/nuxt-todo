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
  async updateCategory({ commit, state }, data) {
    // 削除されたカテゴリの処理
    const nextCategoriesIdList = data.map((category) => category.id);
    await Promise.all(
      state.categories.map((prevCategory) => {
        if (!nextCategoriesIdList.includes(prevCategory.id)) {
          return this.$axios.$delete(`/categories/${prevCategory.id}`);
        }
      })
    );

    // 追加・更新されたカテゴリの処理
    await Promise.all(
      data.map((nextCategory) => {
        if (!nextCategory.id) {
          return this.$axios.$post('/categories', nextCategory);
        }

        if (
          state.categories.some(
            (prevCategory) =>
              prevCategory.id === nextCategory.id && prevCategory.name !== nextCategory.name
          )
        ) {
          return this.$axios.$patch(`/categories/${nextCategory.id}`, {
            name: nextCategory.name,
          });
        }

        return nextCategory;
      })
    );

    // 更新されたカテゴリの取得
    const categories = await this.$axios.$get('/categories');
    commit('setCategories', [...categories]);
  },
};
