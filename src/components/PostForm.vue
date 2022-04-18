<template>
  <form @submit.prevent>
    <!-- //! Двухсторонне связывание. Для этого создаем два значение в data. -->
    <h1>Создание поста</h1>
    <my-input type="text" placeholder="Название" v-model="post.title" />
    <my-input v-focus type="text" placeholder="Описание" v-model="post.body" />
    <!--Чтобы кнопка отрисовалась нормально, необходимо в компоненте my-button в тело тега button вставлять <slot/> -->
    //!<!-- Также на кнопку вешаем слушатель события чтобы кнопка могла выполнять логику создания постов -->
    <my-button
      style="margin-right: -22px; align-self: flex-end"
      @click="createPost"
    >
      Создать
    </my-button>
  </form>
</template>

<script>
import mixinPostForm from "@/mixins/mixinPostForm";

export default {
  name: "post-form",
  mixins: [mixinPostForm],
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
