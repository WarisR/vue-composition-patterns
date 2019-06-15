<template>
  <MyDropdown
    :toggle="toggle"
    :isShow="isShow"
    :collapse="collapse"
  />
</template>

<script>
import Vue from 'vue';
import myMixin from './mixin';

export default Vue.extend({
  name: 'MixinsExample',
  mixins: [myMixin],
});
</script>
