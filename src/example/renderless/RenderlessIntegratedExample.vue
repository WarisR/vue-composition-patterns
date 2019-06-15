<template>
  <ExampleRenderless v-slot="{ isShow: isDropdownShow, toggle, collapse }">
    <MyDropdown
      :toggle="toggle"
      :isShow="isDropdownShow"
      :collapse="collapse"
      :close="close"
    />
  </ExampleRenderless>
</template>

<script>
import Vue from 'vue';
import ExampleRenderless from './Renderless';

const RenderlessIntegratedExample = Vue.extend({
  name: 'RenderlessIntegratedExample',
  components: {
    ExampleRenderless,
  },
});

export default RenderlessIntegratedExample;
</script>
