<template>
  <div class="cat">
    <h2>Cat</h2>
    <div v-if="loading">
      <img :src="require('@/assets/200w_s.gif')">
    </div>
    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    <div v-else>
      <h5><b>Name: </b>{{ data.name }}</h5>
      <img class="cat-img" :src="data.imgSrc">
    </div>
    <button class="t-btn" @click="retry">
      Retry
    </button>
  </div>
</template>
<script>
import Vue from 'vue';
import { fetchCatData } from '@/apis';

export default Vue.extend({
  name: 'Cat',
  created() {
    this.fetchData();
  },
  data() {
    return {
      loading: true,
      data: null,
      error: null,
    };
  },
  methods: {
    async fetchData() {
      this.loading = true;
      this.error = null;
      try {
        this.data = await fetchCatData();
      } catch (e) {
        this.error = e;
      }
      this.loading = false;
    },
    retry() {
      this.fetchData();
    },
  },
});
</script>

<style scoped>
.cat-img {
  width: 200px;
}

.error {
  color: red;
  font-size: 30px;
}

.cat {
  width: 50%;
}
</style>
