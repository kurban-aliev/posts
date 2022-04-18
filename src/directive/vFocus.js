export default {
  directives: {
    focus: {
      // определение директивы
      mounted(el) {
        el.focus();
      },
    },
  },
};
