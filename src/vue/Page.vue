<template>
  <div class="root">
    <div class="header">1
      <div class="title">
         <span class="title-logo">ШКОЛА ДИЗАЙНА</span>  
         <span class="title-logo_span">СПбШТ</span>

      </div>  
           
      <div class="title-1">
            <span class="title-1_city">Ваш город </span>
            <select  id="country">
               <option value="">Москва</option>
            </select>

      </div > 
      <div class="title-2">
          <a href="#" class="title-btn">Заявка на обучение </a>
          <span class="title-basket">Код корзины: 602-640</span>
      </div>

    </div>
    <div class="info">

        <div class="img-wraper">
        </div>
        <div class="info-wraper">
            <div class="info-text">
        <h1>Курсы <br />рисования и <br />живописи</h1>
             </div>
             <div class="info-text_1">
            <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path
                d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
              />
            </svg>
            Воплоти детскую мечту,стань настоящим <br />художником!
            </p>

          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path
                d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
              />
            </svg>
            Научись работать во всех жанрах живописи: портре,<br />
            натюрморт, пейзаж!
          </p>
             </div>
             <div class="info-button">
                 
             <button
      type="button"
      class="btn "
      @click="openModal"
    >
      Подать заявку
    </button>
    <vue-modal
          v-if="isModalOpen"
      title="ФОРМА ЗАЯВКИ"
      @close="isModalOpen = false"
      >
       <form>
        <div class="form-group">
      <!-- <label for="name">Имя</label> -->
      <input 
      id="name" 
      onfocus="this.className='active'"
      class="form-control"
      placeholder="Имя*"
      v-model.trim="name"
    >
  </div>
    <div class="form-group">
      <!-- <label for="name">Фамилия</label> -->
      <input 
      id="lastname" 
      onfocus="this.className='active'"
      class="form-control" 
      placeholder="Фамилия*"
      type="text"
      v-model.trim="lastname"
    >
    </div>

    <div class="form-group">
      <!-- <label for="name">почта</label> -->
      <input 
       id="email"
       class="form-control" 
       onfocus="this.className='active'"
       placeholder="Еmail адрес*"
       type="email"
       v-model.trim="email"
    >
     </div>

     <div class="form-group">
      <!-- <label for="name">Телефон</label> -->
      <input 
       id="tel"
       class="form-control"
       onfocus="this.className='active'"
       placeholder="Телефон*"
       type="tel"
       v-model.trim="tel"
    >
     </div>
      </form>
    </vue-modal>

          <a href="#" class="btn2">Расписание</a>
             </div>
        </div>
    </div>
    
    <div class="menu-info">3
        <nav class="menu-post" v-for="i in 6" :key="i">
             <nav class="menu-img" >
                    {{i}}
             </nav>
             <nav class="post-menu-info">
                    {{i}}
        </nav>
        </nav>
    </div>

    <div class="container">
        <div class="post" v-for="i in 4" :key="i"> 
            <div class="post-img">
                    {{i}}
            </div>
            <div class="post-content">
                    {{i}}
            </div>
        </div>
    </div>
    <div class="footer">4</div>
  </div>
</template>

<script>
// import ModalForm from './ModalForm.vue'
import VueModal from './VueModal'

export default {
  name: 'PageComponent',
  components: { VueModal},
  data() {
      return {
        isModalOpen: false,
        name:'',
        lastname:'',
        email:'',
        tel: '',
        values: {}
      }
  },
  methods: {
      openModal() {
          this.isModalOpen = true
      }
    },

 }
</script>


<style>
/* */
body, 
h1, 
h2,
h3,
h4,
h5,
h6,
p,
a, 
span
div,
section, 
option, 
nav {
    padding: 0;
    margin: 0;
}
/* Наследуем шрифты для инпутов и кнопок */
input,
button,
textarea,
select {
  font: inherit;
}
form {
  width: 600px;
  max-width: 100%;
  overflow: hidden; 
}

.form-group input {
    width: 100%;
    padding: 12px 20px;
    margin: 10px 0;
    box-sizing: border-box;
    border-radius: 11px;
    background: #000000;
    color: rgb(255, 255, 255);
}
input.active:focus {
       background-color: rgb(20, 97, 160);
       color: white;
    }

.modal {
      background: #000;
      position: fixed; 
      left: 0;
      top: 0;
      width: 100%; 
      height: 100%;
      opacity: 0.9;
      z-index: 1000;
      border: 1px solid rgba(0,0,0,.2);
      display: flex; 

    }
.modal-content {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: .3rem;
    outline: 0;
}

.modal-header {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    background: radial-gradient(black, transparent);
    color: white;
}
.modal-title {
    margin-top: 0;
    margin-bottom: 0;
    line-height: 1.5;
    font-size: 1.25rem;
    color: yellow;
    margin-left: 150px;
}

.btn-secondary {
    padding: 7px;
    margin-right: 14px;
    border-radius: 0.3em;
    text-transform: uppercase;
    font-weight: 500;
}
.btn-secondary:hover {
  background: red;
}
.btn-primary {
    color: black;
    border-radius: 0.3em;
    margin-right: 11px;
    padding: 7px;
    text-transform: uppercase;
    font-weight: 500;
}


 body {
  padding: 0;
  margin: 0;
  letter-spacing: 0.03em;
  line-height: 1em;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  min-height: 100vh;

}


    .root {
        display: flex;
        width: 1200px;
        margin: 0 auto;
        border: 1px solid red;
        flex-direction: column;
    }

    .header {
        height: 50px;

        display: flex;
        border: 1px solid red;
        margin: 16px;
    }
  
    .title {
        display: flex; 
        font-size: 20px;
        flex-direction: column;
        margin-left: 60px;
    }
    .title-logo {
    text-transform: uppercase;
    margin-bottom: 5px;
    font-weight: bold;
    letter-spacing: normal;
    }
    .title-1 {
        display: flex;  
        font-size: 14px;
        flex-direction: column;
        }

    .title-1_city {
       margin-left: 24px;
       font-size: 12px;
       margin-top: -3px;
        }
    select {
        margin-left: 40px;
        border: none;
        font-size: 20px;
        color: #33dcdc;
        margin-top: 2px;
        }

    .title-2 {
         display: grid;  
         margin-left: 500px;
         margin-right: 60px;
    }
    .title-btn {    
        border: 1px solid bronze;
        border: 2px solid darkgoldenrod;
        text-decoration: none;
        color: darkgoldenrod;
        text-transform: uppercase;
        padding: px;
        font-size: 15px;
        padding-left: 17px;
        padding-right: 17px;
    }

    .title-basket {
        font-size: 12px;
        text-align: right;
    }

    a:hover {
        color: blue;
    }
    
    .info {
        display: flex;
        height: 300px;
        border: 1px solid red;
        margin: 16px;
    }

    .img-wraper {
        display: flex;
        height: 300px;
        flex-direction: row;
        border: 1px solid red;
        justify-content: space-between;
        width: 60%;
    }

    .info-wraper {
        display: flex;
        height: 300px;
        flex-direction: column;
        border: 1px solid red;
        justify-content: space-between;
        width: 40%;
        background: black;
    }

    .info-text {
        display: flex;
        height: 600px;
        border: 1px solid black;
        justify-content: space-between;
        margin-bottom: -35px;

    }

    .info-text_1 {
        display: flex;
        height: 180px;
        border: 1px solid black;
        justify-content: space-between;
        letter-spacing: inherit;
        line-height: normal;
        flex-direction: column;
        color: white;
        padding: 12px;

    }
    .info-button {
        display: flex;
        height: 225px;
        border: 1px solid black;
    }

    .btn {
    padding-right: 9px;
    padding-left: 9px;
    padding-top: 8px;
    text-decoration: none;
    border: 1px solid darkgoldenrod;
    background: darkgoldenrod;
    border-radius: 0.3em;
    margin: 14px;
    color: white;
    text-transform: uppercase;
}   
.btn2 {
    padding-right: 9px;
    padding-left: 9px;
    padding-top: 8px;
    text-decoration: none;
    border: 1px solid #33dcdc;
    background: #33dcdc;
    border-radius: 0.3em;
    margin: 14px;
    color: white;
    text-transform: uppercase;

} 
    h1 {
        color: darkgoldenrod;
        font-size: 40px;
        text-transform: uppercase;
        line-height: normal;
        margin: 5px;
    }

    .menu-info {
        display: flex;
        border: 1px solid red;
        margin: 16px;
        margin-top: -16px;
        flex-direction: row;
        box-sizing: border-box;

    }
    .menu-post {
        display: flex;
        flex-direction: column;
        border: 1px solid red;
        justify-content: space-between;
        margin-left: 40px;
        margin-right: 50px;
        width: 50%;
        align-items: center;
    }
    .menu-img {
        display: flex;
        width: 30%;
        border: 1px solid black;
        margin: 5px;
        height: 25px;
    }
    

    .post-menu-info {
        display: flex;
        width: 70%;
        border: 1px solid black;
        margin: 5px;
        height: 25px;
    }


    

    .container {
        display: flex;
        border: 1px solid red;
        margin: 16px;
        flex-direction: column;
    }

    .footer {
        display: flex;
        height: 50px;
        border: 1px solid red;
        margin: 16px;
    }

    .post {
        display: flex;
        height: 100px;
        flex-direction: row;
        border: 1px solid red;
        margin: 16px;
        justify-content: space-between;
    }

    .post-img {
        display: flex;
        width: 30%;
        border: 1px solid black;
        margin: 5px;
    }
    .post-content {
        display: flex;  
        width: 70%;
        border: 1px solid black;
        margin: 5px;
    }
</style>
