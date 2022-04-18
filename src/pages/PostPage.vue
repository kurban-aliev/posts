<template>
  <div>
    <h1>Страница с постами</h1>
    <!--На кнопку вешаем слушатель события по клику которго будет открывать диалоговое окно -->
    <!--В секции my-input реализуем поле поиска, сразу делаем двухсторонее связывание -->
    <my-input v-model="searchQuery" placeholder="Поиск....." v-focus />
    <div class="app__btns">
      <my-button @click="showDialog"> Создать пост </my-button>
      <!--Делаем двухсторонее связываания списка, также байндим наш opion указанный в props компонента me-select и присваиваем ему значение массива -->
      <my-select v-model="selectedSort" :options="sortOptions" />
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
        @click="pageClick(pageNumber)"
        :class="{ current_page: page === pageNumber }"
      >
        {{ pageNumber }}
      </div>
    </div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import Spiner from "@/components/Spiner.vue";
import PostList from "@/components/PostList.vue";
import mixinPostPage from "@/mixins/mixinPostPage";

export default {
  components: { PostList, PostForm, Spiner },
  name: "post-page",
  mixins: [mixinPostPage],
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
