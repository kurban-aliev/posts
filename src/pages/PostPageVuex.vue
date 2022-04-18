<template>
  <div>
    <div>
      <!--К хранилищу обращаемся через глобальный контекст $store -->
      <!--Для вызова мутации мы используем comit,  а в качестве аргумента функция принимает значение мутации тоже функцию которая описана в самой мутации -->
    </div>
    <h1>Страница с постами</h1>
    <!--На кнопку вешаем слушатель события по клику которго будет открывать диалоговое окно -->
    <!--В секции my-input реализуем поле поиска, сразу делаем двухсторонее связывание -->
    <my-input :model-value="searchQuery" @update:model-value="setSearchQuery" placeholder="Поиск....." v-focus />
    <div class="app__btns">
      <my-button @click="showDialog"> Создать пост </my-button>
      <!--Делаем двухсторонее связываания списка, также байндим наш opion указанный в props компонента me-select и присваиваем ему значение массива -->
      <my-select :model-value="selectedSort" @update:model-value="setSelectedSort" :options="sortOptions" />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <!-- вешаем реализованный props котрый мы создавали чтобы отрабатывала логическое значение true || false -->
      <!--В post-form реализовали механизм кнпоки создать и поэтому в родителе фиксируем createPost -->
      <post-form @create="createPost" />
    </my-dialog>
    <!--//? Импортируем Props  вродительский компонент -->
    <!--Вешаем события на компонент post-list-->
    <!--Обращаемся к computed свойству sortedPost -->
    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      @edit="editPost"
      v-if="!isPostLoading"
    />
    <div v-else>
      Идет загрузка
      <Spiner />
    </div>
    <div class="page__wraper">
      <!--В этом блоке реализован постраничный вывод страниц -->
      <div
        class="page"
        v-for="pageNumber in totalPage"
        :key="pageNumber"
        :class="{ current_page: page === pageNumber }"
        @click="pageClick(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import Spiner from "@/components/Spiner";
import PostList from "@/components/PostList";
// import mixinPostPage from "@/mixins/mixinPostPage";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import MySelect from "@/components/UI/MySelect.vue";
import MyInput from "@/components/UI/MyInput.vue";
import MyButton from "@/components/UI/MyButton.vue";

export default {
  name: "post-pagevuex",
  components: {
    PostList,
    PostForm,
    Spiner,
    MyInput,
    MyButton,
    MySelect,
  },
  // mixins: [mixinPostPage],
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSelectedSort: "post/setSelectedSort",
      setSearchQuery: "post/setSearchQuery",
    }),
    ...mapActions({
      fetchPost:"post/fetchPost"
      }),

    createPost(post) {
      //! Добавляем пост в  массив которые мы получили от ребенка
      //?После создания поста диалоговое коно закрываеться
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(index) {
      this.posts.splice(index,1); //Мы реализовали функцию которая принимает на себя  в качестве аргумента
      // сам post котрый мы заэмитили в PostList, далее мы сортируем по массиву поста с помощью метода
      // Filter, так как Filter  возвращает новый массив, мы перезаписываем старый б и по итогу в результирующий массив попадают те посты id которых не равен посту котрый мы хотим удалить
    },
    editPost(index) {
      this.post = this.posts[index];
    },
    showDialog() {
      this.dialogVisible = true;
    },
    pageClick(pageNumber) {
      this.page = pageNumber;
      this.fetchPost();
    },
  },
    mounted() {
        this.fetchPost();
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostsLoading: (state) => state.post.isPostsLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPage: (state) => state.post.totalPage,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',
    }),
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
};
</script>

<style scoped>
.app__btns {
  display: flex;
  justify-content: space-between;
  margin: 0 15px;
}
.page__wraper {
  display: flex;
  margin-top: 10px;
}
.page {
  border: 1px solid black;
  padding: 10px;
  cursor: pointer;
}
.current_page {
  border: 2px solid rgb(8, 8, 83);
}
</style>
