<template>
  <Cat
    :loading="loading"
    :data="data"
    :error="error"
    @retry="retry"
  />
</template>

<script>
import Vue from 'vue';
import asyncRetryMixin from './asyncRetryMixin';
import Cat from '@/example/Cat.vue';
import { fetchCatData } from '@/apis';

export default Vue.extend({
  name: 'MixinsExample',
  mixins: [asyncRetryMixin(fetchCatData)],
  components: {
    Cat,
  },
});
</script>
