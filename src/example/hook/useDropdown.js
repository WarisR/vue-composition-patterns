import Vue from 'vue';

function useDropdown(vm) {
  const props = {
    isShow: true,
  };

  const toggle = () => {
    props.isShow = !props.isShow;
  };

  const collapse = () => {
    props.isShow = false;
  };

  props.toggle = toggle;
  props.collapse = collapse;

  vm.$on('hook:mounted', () => {
    // Do something when component is mounted
  });

  vm.$on('hook:destroyed', () => {
    // Do something when component is destroyed
  });

  return props;
}

export default useDropdown;
