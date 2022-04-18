export const postModule = {
  state: {
    posts: [], // заполняеться по запросу из сервера
    isPostLoading: false,
    selectedSort: "",
    searchQuery: "",
    page: 1,
    limit: 10,
    totalPage: 0,
    sortOptions: [
      { value: "title", text: "По названию" },
      { value: "body", text: "По содержанию" },
    ],
  },
  getters: {
    sortedAndSearchedPosts(state) {
      return state.posts.filter(post => {
      return  post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      }); // делаем поиск по отсортированному массиву, так как метод filter возвращает нам новый массив ищем пост по названию и передаем в поле serchQuery значение
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setLoading(state, bool) {
      state.isPostsLoading = bool;
    },
    setPage(state, page) {
      state.page = page;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setTotalPage(state, totalPage) {
      state.totalPage = totalPage;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
  },
  actions: {
    async fetchPost({ state, commit }) {
      try {
        commit("setLoading", true); //модальное окно открываеться
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=${this.limit}&_page=${this.page}`);
            // 'https://jsonplaceholder.typicode.com/posts?_limit=' + limit,page);
        const posts = await response.json();
        state.posts = posts;
        commit("setPosts", posts);
        commit("setTotalPage",Math.ceil(response.headers.get("x-total-count") / state.limit));
      } catch (e) {
        console.log(e);
      } finally {
        commit("setLoading", false); // модальное окно автоматически закрываеться
      }
    },
  },
  namespaced: true,
};
