import Vue from 'vue';

const hoc = (component) => {
  const originalProps = component.props || [];
  return Vue.extend({
    render(createElement) {
      return createElement(component, {
        components: this.components,
        on: { ...this.$listeners },
        props: {
          ...originalProps,
          isShow: this.isShow,
          toggle: this.toggle,
          collapse: this.collapse,
        },
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
};

export default hoc;
