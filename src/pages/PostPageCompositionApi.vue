<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input v-model="searchQuery" placeholder="Поиск...." v-focus />
    <div class="app__btns">
      <my-button> Создать пользователя </my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form />
    </my-dialog>
    <post-list :posts="sortedAndSearchedPosts" v-if="!isPostsLoading" />
    <div v-else>Идет загрузка...</div>
    <Spiner />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import Spiner from "@/components/Spiner";
import PostList from "@/components/PostList";
import MySelect from "@/components/UI/MySelect.vue";
import MyInput from "@/components/UI/MyInput.vue";
import MyButton from "@/components/UI/MyButton.vue";
// import usePost from "@/hooks/usePost"
// import useSortedPosts from "@/hooks/useSortedPosts"
// import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts"

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
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: "title", text: "По названию" },
        { value: "body", text: "По содержанию" },
      ],
    };
  },
  // setup(props) {
  //   const {posts, totalPage,isPostLoading} = usePost(10);
  //   const {selectedSort, sortedPosts} = useSortedPosts(posts);
  //   const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts);

  //   return {
  //     posts,
  //     totalPage,
  //     isPostLoading,
  //     selectedSort,
  //     sortedPosts,
  //     searchQuery,
  //     sortedAndSearchedPosts
  //   }
  // }
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
