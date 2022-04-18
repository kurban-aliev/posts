<template>
  <!--Делаем условную отрисовку, т.е мы ставим на блок div условие, если оно будет невыполнено, то отработает директива v-else -->
  <div v-if="posts.length > 0">
    <h3>Список пользователей</h3>
    <!--//!    Байндин post котрый мы указали в props  в компоненте PostItem -->
    <!--//todo Добавляем события remove, которое мы реализовали в PostItem, далее мы делаем эмит. и прокидываем события наверх, а в качестве второго параметра передаем сам post-->
    <transition-group name="list">
      <post-item
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @remove="$emit('remove', post)"
      />
    </transition-group>
  </div>
  <h2 v-else style="color: red">Список пользователей пуст!</h2>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
import mixinPostList from "@/mixins/mixinPostList";
export default {
  name: "post-list",
  components: { PostItem },
  mixins: [mixinPostList],
};
</script>

<style scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.8s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.list-move {
  transition: transform 2s ease;
}
</style>
