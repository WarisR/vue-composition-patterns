<template>
  <MyDropdown
    :toggle="toggle"
    :isShow="isShow"
    :collapse="collapse"
  />
</template>

<script>
import Vue from 'vue';
import createHoC from './hoc';

const HocExample = Vue.extend({
  name: 'HocExample',
  props: {
    isShow: {
      type: Boolean,
      required: true,
    },
    toggle: {
      type: Function,
      required: true,
    },
    collapse: {
      type: Function,
      required: true,
    },
  },
});

export default createHoC(HocExample);
</script>
