<template>
  <MyDropdown
    :toggle="dropdown.toggle"
    :isShow="dropdown.isShow"
    :collapse="dropdown.collapse"
  />
</template>

<script>
import Vue from 'vue';
import useDropdown from './useDropdown';

const exampleComponent = Vue.extend({
  data() {
    return { dropdown: useDropdown(this) };
  },
});

export default exampleComponent;
</script>
