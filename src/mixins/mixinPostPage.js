export default {
  data() {
    return {
      posts: [], // заполняеться по запросу из сервера
      dialogVisible: false, // по умолчанию она имеет значение false
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
    };
  },
  methods: {
    createPost(post) {
      //! Добавляем пост в  массив которые мы получили от ребенка
      //?После создания поста диалоговое коно закрываеться
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(index) {
      this.posts.splice(index, 1); //Мы реализовали функцию которая принимает на себя  в качестве аргумента
      // сам post котрый мы заэмитили в PostList, далее мы сортируем по массиву поста с помощью метода
      // Filter, так как Filter  возвращает новый массив, мы перезаписываем старый б и по итогу в результирующий массив попадают те посты id которых не равен посту котрый мы хотим удалить
    },
    editPost(index) {
      this.post = this.posts[index];
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPost() {
      try {
        this.isPostLoading = true; //модальное окно открываеться

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=${this.limit}&_page=${this.page}`
        );
        const data = await response.json();

        this.totalPage = Math.ceil(
          response.headers.get("x-total-count") / this.limit
        );
        this.posts = data;
      } catch (error) {
        console.log(error.message);
      } finally {
        this.isPostLoading = false; // модальное окно автоматически закрываеться
      }
    },
    pageClick(pageNumber) {
      this.page = pageNumber;
      this.fetchPost(50);
    },
  },

  watch: {
    selectedSort() {
      this.posts = this.posts.sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(
          post2[this.selectedSort]
        ); // делаеться сравнение вух постов с помощью функции localeCompare
      });
    },
  },
  computed: {
    sortedAndSearchedPosts() {
      return this.posts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      ); // делаем поиск по отсортированному массиву, так как метод filter возвращает нам новый массив ищем пост по названию и передаем в поле serchQuery значение
    },
  },
  mounted() {
    this.fetchPost();
  },
};
