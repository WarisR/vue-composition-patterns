<template>
  <div class="cat">
    <h2>Cat</h2>
    <div v-if="loading">
      <div>Loading...</div>
      <img :src="require('@/assets/200w_s.gif')">
    </div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else>
      <h5><b>Name: </b>{{ data.name }}</h5>
      <img class="cat-img" :src="data.imgSrc">
    </div>
    <button class="t-btn" @click="$emit('retry')">
      Retry
    </button>
  </div>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Cat',
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
    data: {
      type: Object,
    },
    error: {
      type: String,
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
