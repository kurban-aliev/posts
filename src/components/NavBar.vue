<template>
  <div class="navbar">
    <div class= "main_page" @click="$router.push('/')">Главная</div>
    <div class="navbar__btn">
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button style="margin-left:5px" @click="$router.push('/abouts')">О сайте </my-button>
      <my-button style="margin-left:5px" @click="$router.push('/store')">Vuex </my-button>


    </div>
  </div>
</template>

<script>

export default {};
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: rgb(132, 172, 172);
  box-shadow: 2px 2px 4px blueviolet;
  display: flex;
  align-items: center;
  border-radius: 12px;
}
.navbar__btn {
  margin-left: auto;
  padding: 0 15px;
  color: black;
}
.main_page {
  margin-left: 15px;
  cursor: pointer;
}
</style>
