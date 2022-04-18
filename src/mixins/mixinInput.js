export default {
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)// чтобы реализовать двухсторонее связывание в дочернем компоненте
                                                         // необходимо за эмитить события и передать в эмит модельБ которую мы указали  в родительском компоненте
                                                         //  и в родительсом компоненте у нас обновляеться модель
    }
  },
  mounted() {},
};