<template>
  <div id="app" >
    <div class="compare-content">
      <UserProfile />
      <Cat />
    </div>
    <!-- <h2>Mixins</h2>
    <MixinsCat />
    <h2>Renderless component</h2>
    <RenderlessCat />
    <h2>Hooks</h2>
    <HookCat /> -->
  </div>
</template>

<script>
import Vue from 'vue';
import Cat from '@/example/original/Cat.vue';
import UserProfile from '@/example/original/UserProfile.vue';
import MixinsCat from '@/example/mixins/Cat.vue';
import RenderlessCat from '@/example/renderless/Cat.vue';
import HookCat from '@/example/hook/Cat.vue';

export default Vue.extend({
  components: {
    Cat,
    UserProfile,
    MixinsCat,
    RenderlessCat,
    HookCat,
  },
});
</script>

<style>
#app {
  margin: 20px;
}
.compare-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.t-btn {
  background-color: transparent;
  background-image: none;
  color: #00B900;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid #00B900;
  padding: 0.375rem 0.75rem;
  font-size: 20px;
  line-height: 1.5;
  border-radius: 2px;
}
</style>
