import Vue from 'vue';

const dropDownMixin = Vue.extend({
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

export default dropDownMixin;
