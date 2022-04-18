import { createStore } from 'vuex'
import {postModule} from '@/store/postModule'

export default createStore({
 
  modules: { //Vuex позволяет нам разделить наш магазин на модули . Каждый модуль может содержать свое состояние, мутации, действия, геттеры и даже вложенные модули 
    post: postModule
  }
})


 // state: { // - state это само состояние в ней мы будем хранить наши данные приложерния 
  //   likes: 2
  // },
  // getters: { // - это своего рода computed свойства 
  //   dubleLikes(state) {
  //     return state.likes * 2
  //   }
  // },
  // mutations: { // изменять напряму мы не можем, с помощь мутаци мы можем анпряму изменять знчения в состонии(state)
  //   incrementLikes(state) {
  //     state.likes +=1
  //   },
  //   decrementLikes(state) {
  //     state.likes -=1
  //   }
  // },
  // actions: { // здесь мы храним мутации. Тюе тут мы получаем данные из сервера и потом сохраняем это значение в state

  // }, 
