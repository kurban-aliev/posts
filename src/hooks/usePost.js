import { onMounted, ref } from "vue";

export function usePost(limit) {
  const posts = ref([]);
  const totalPage = ref(0);
  const isPostLoading = ref(true);
  const fetching = async () => {
    try {
      this.isPostLoading = true; //модальное окно открываеться

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${this.page}`
      );
      const data = await response.json();

      totalPage.value = Math.ceil(
        response.headers.get("x-total-count") / limit
      );
      posts.value = data;
    } catch (error) {
      console.log(error.message);
    } finally {
      isPostLoading.value = false; // модальное окно автоматически закрываеться
    }
  };
  onMounted(fetching);

  return {
    posts,
    isPostLoading,
    totalPage,
  };
  // onCreated()
  // computed()
  // watch()
}
