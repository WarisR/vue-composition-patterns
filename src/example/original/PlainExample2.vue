<template>
  <div class="plain-container">
    <div class="title">
      <div><strong>Plain Example</strong></div>
      <div @click="toggle">
        <i :class="[
          'fas',
          'toggle-icon',
          { 'fa-angle-up': !isShow,'fa-angle-down': isShow }]" />
      </div>
    </div>
    <div v-if="isShow" class="content">
      <div class="content-data">
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      </div>
      <input
        type="checkbox" id="checkbox" class="my-checkbox"
        v-model="checked">
      <label for="checkbox">Agree</label>
      <div class="button-container">
        <button
          type="button"
          class="btn btn-success"
          @click="collapse"
          :disabled="!checked"
        >
          Done
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      checked: false,
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
  margin: 0 20px;
  border: 1px solid black;
  user-select: none;
}

.title {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: 20px;
  color: #333;
}

.content {
  padding: 10px;
  padding-left: 20px;
}

.content-data {
  margin-bottom: 10px;
}

.button-container {
  display: flex;
  justify-content: flex-end;
}

.my-checkbox {
  margin-right: 10px;
  cursor: pointer;
}

.toggle-icon {
  cursor: pointer;
}
</style>
