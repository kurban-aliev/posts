import { createApp } from 'vue'
import App from './App.vue'
import components from "@/components/UI";
import router from '@/router/router';
import store from '@/store';


// const store = createStore({
//   state () {
//     return {
//       count: 0
//     }
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   }
// })

const app = createApp(App)  //* create(App) возвращает нам экземпляр приложения 
components.forEach(component => { //! чтобы мы могли итерироваться по массиву указанный в компоненте components
  app.component(component.name, component) //todo глобальная регистрация компонента, чтобы мы могли использовать этот компонент везде
})

// Регистрируем глобальную пользовательскую директиву `v-focus`
app.directive('focus', {
  // Когда привязанный элемент будет примонтирован в DOM...
  mounted(el) {
    // Переключаем фокус на элемент
    el.focus()
  }
})



app
  .use(store)// подключаем store
  .use(router)// устанавливаем плагин router
  .mount('#app') //? функцию mount  мы вызываем у  экземпляра нашего  приложения

