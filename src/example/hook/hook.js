import Vue from 'vue';

function hook() {
  const props = Vue.observable({
    isShow: true,
  });

  const toggle = () => {
    props.isShow = !props.isShow;
  };

  const collapse = () => {
    props.isShow = false;
  };

  props.toggle = toggle;
  props.collapse = collapse;

  return props;
}

export default hook;
