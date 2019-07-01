<template>
  <AsyncRetryRenderless v-slot="{ loading, data, error, retry }">
    <Cat
      :loading="loading"
      :data="data"
      :error="error"
      @retry="retry"
    />
  </AsyncRetryRenderless>
</template>

<script>
import Vue from 'vue';
import AsyncRetryRenderless from './AsyncRetryRenderless';
import Cat from '@/example/Cat.vue';
import { fetchCatData } from '@/apis';

const RenderlessIntegratedExample = Vue.extend({
  name: 'RenderlessIntegratedExample',
  components: {
    Cat,
    AsyncRetryRenderless: AsyncRetryRenderless(fetchCatData),
  },
});

export default RenderlessIntegratedExample;
</script>
