<template>
  <!--Для того чтобы приложения отрисовввала страницы, необходимо в рдительский компонент добавить тег<router-view></router-view>
 -->
  <nav-bar></nav-bar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  name: "App",
  components: {NavBar},
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
</style>
