import Vue from 'vue';

const AsyncRetryRenderless = fetch => Vue.extend({
  name: 'AsyncRetryRenderless',
  render() {
    return this.$scopedSlots.default({
      loading: this.loading,
      data: this.data,
      error: this.error,
      retry: this.retry,
    });
  },
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
        this.data = await fetch();
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

export default AsyncRetryRenderless;
