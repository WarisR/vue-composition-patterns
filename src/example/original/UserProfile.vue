<template>
  <div class="user-profile">
    <h2>User Profile</h2>
    <div v-if="loading">Fetching user...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else>
      <div><b>First name:</b> {{ data.firstName }}</div>
      <div><b>Last name:</b> {{ data.lastName }}</div>
      <div><b>Role:</b> {{ data.role }}</div>
      <img class="profile-img" :src="data.imgSrc">
    </div>
    <button class="t-btn" @click="retry">Retry</button>
  </div>
</template>
<script>
import Vue from 'vue';
import { fetchUserData } from '@/apis';

export default Vue.extend({
  name: 'UserProfile',
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
        this.data = await fetchUserData();
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
.profile-img {
  width: 200px;
}

.error {
  color: red;
  font-size: 30px;
}

.user-profile {
  width: 50%;
  font-size: 16px;
}
</style>
