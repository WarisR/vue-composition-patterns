<template>
  <Renderless v-slot="{ isShow: isDropdownShow, toggle, collapse }">
    <MyDropdown
      :toggle="toggle"
      :isShow="isDropdownShow"
      :collapse="collapse"
    />
  </Renderless>
</template>

<script>
import Vue from 'vue';
import Renderless from './Renderless';

const exampleComponent = Vue.extend({
  components: {
    Renderless,
  },
});

export default exampleComponent;
</script>
