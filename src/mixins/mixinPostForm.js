export default {
   //! Чтобы в компоненте работала логика нужна переместить в data поля title, body
   data() {
    return {
      post: {
        title: "",
        bpdy: "",
      },
    };
  },
  methods: {
    createPost() {
    //  this.post.id  = Date.now(),
     //! Чтобы передать данные из ребенка в родитель, Мы должны в родителе подписаться на событие которое мы реализовали в ребенке
     this.$emit('create', this.post)
     //todo Это позволяет сделать поле инпутов после создания кнопки сделать пустым.Т.е очистить
     this.post = {
        title: '',
        body:  ''
     }
    }
  },
  mounted() {},
};