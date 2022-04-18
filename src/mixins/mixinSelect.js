export default {
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [], // если дефолтное значение принимает пустой массив рекомендуеться исмпользовать стрелочную фукнцию
    },
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
  mounted() {},
};
