<template>
  <div id="app">
    <h2>Plain Example</h2>
    <PlainExample />

    <h2>Plain Example 2</h2>
    <PlainExample2 />

    <h2>Mixins Example</h2>
    <MixinsExample />

    <h2>HoC Example</h2>
    <HoCExample />

    <h1>Renderless component Example</h1>
    <RenderlessIntegratedExample />

    <h1>Hook Example</h1>
    <HookExample />
  </div>
</template>

<script>
import Vue from 'vue';
import MyDropdown from './example/MyDropdown.vue';
import PlainExample from './example/original/PlainExample.vue';
import PlainExample2 from './example/original/PlainExample2.vue';
import MixinsExample from './example/mixins/MixinsExample.vue';
import HoCExample from './example/hoc/HoCExample.vue';
import RenderlessIntegratedExample from './example/renderless/RenderlessIntegratedExample.vue';
import HookExample from './example/hook/HookExample.vue';

Vue.component('MyDropdown', MyDropdown);

export default Vue.extend({
  components: {
    PlainExample,
    PlainExample2,
    MixinsExample,
    HoCExample,
    RenderlessIntegratedExample,
    HookExample,
  },
});
</script>
