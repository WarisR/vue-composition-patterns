<template>
  <Cat
    :loading="asyncHooks.loading"
    :data="asyncHooks.data"
    :error="asyncHooks.error"
    @retry="asyncHooks.retry"
  />
</template>

<script>
import Vue from 'vue';
import useAsyncRetry from './useAsyncRetry';
import { fetchCatData } from '@/apis';
import Cat from '@/example/Cat.vue';

const exampleComponent = Vue.extend({
  components: {
    Cat,
  },
  data() {
    return {
      asyncHooks: useAsyncRetry(this, fetchCatData)
    };
  },
});

export default exampleComponent;
</script>
