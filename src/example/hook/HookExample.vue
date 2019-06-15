<template>
  <MyDropdown
    :toggle="hookProps.toggle"
    :isShow="hookProps.isShow"
    :collapse="hookProps.collapse"
  />
</template>

<script>
import Vue from 'vue';
import createHook from './hook';

const exampleComponent = Vue.extend({
  data() {
    return { hookProps: createHook() };
  },
});

export default exampleComponent;
</script>
