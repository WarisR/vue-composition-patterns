import Vue from 'vue';

const Renderless = Vue.component('Renderless', {
  render() {
    return this.$scopedSlots.default({
      isShow: this.isShow,
      toggle: this.toggle,
      collapse: this.collapse,
    });
  },
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },
    collapse() {
      this.isShow = false;
    },
  },
});

export default Renderless;
