<template>
  <div class="post">
    <div>
      <div>{{ post.id }} </div>
      <div><strong>Название:</strong> {{ post.title }}</div>
      <div><strong>Описание:</strong> {{ post.body }}</div>
    </div>
    <div class="post__btn">
      <!--Создаем слушатель события делаем эмит, создаем события слушателя и наверз прокидываем сам пост
       мы отдаем пост по цепочке наверх
       -->
      <!--Для кнопки открыть мы делаем логику чтобы по каждому посту с бекенда получали информацию о посте -->
      <my-button @click="$router.push(`/posts/${post.id}`)">
        Отркыть
      </my-button>
      <my-button @click="$emit('remove', post)"> Удалить </my-button>
      <!-- <my-button
       @click="$emit('edit', post)"
      >
        Редактировать
      </my-button> -->
    </div>
  </div>
</template>

<script>
import mixinPostItem from "@/mixins/mixinPostItem";

export default {
  name: "post-item",
  mixins: [mixinPostItem],
};
</script>

<style scoped>
.post {
  border: 2px solid red;
  padding: 10px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post__btn {
  display: flex;
  justify-content: space-between;
}
</style>
