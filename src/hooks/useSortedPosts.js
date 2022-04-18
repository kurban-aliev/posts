import { ref, watch } from "vue";

export default function useSortedPosts(posts) {
  const selectedSort = ref("");
  const sortedPosts = watch(() => {
    return [...posts.value].sort((post1, post2) =>
      post1[selectedSort.value]?.localeCompare(post2[selectedSort.value])
    );
  });

  return {
    selectedSort,
    sortedPosts,
  };
}
