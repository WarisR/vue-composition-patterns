<template>
  <div class="plain-container">
    <div @click="toggle" class="title">
      <strong>My Dropdown</strong>
    </div>
    <div v-if="isShow" class="content">
      <div class="content-data">
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
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

const MyDropdown = Vue.extend({
  name: 'MyDropdown',
  props: {
    isShow: {
      type: Boolean,
      required: true,
    },
    toggle: {
      type: Function,
      required: true,
    },
    collapse: {
      type: Function,
      required: true,
    },
  },
});

export default MyDropdown;
</script>

<style scoped>
.plain-container {
  margin: 0 20px;
  border: 1px solid black;
  user-select: none;
}

.title {
  padding: 10px;
  font-size: 20px;
  color: #333;
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
