<template>
  <div class="plain-container">
    <div @click="toggle" class="title">
      <strong>Plain Example</strong>
    </div>
    <div v-if="isShow" class="content">
      <div class="content-data">
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      </div>
      <button
        type="button"
        class="btn btn-success"
        @click="collapse"
      >
        Collapse
      </button>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },
    collapse() {
      this.isShow = false;
    },
  },
});
</script>

<style scoped>
.plain-container {
  border: 1px solid black;
  margin: 0 20px;
  user-select: none;
}

.title {
  padding: 10px;
  font-size: 20px;
  color: #333;
  cursor: pointer;
}

.title:hover {
  background-color: #e6e6e6;;
}

.content {
  padding: 10px;
  padding-left: 20px;
}

.content-data {
  margin-bottom: 10px;
}
</style>
