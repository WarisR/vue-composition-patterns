import Vue from 'vue';

const asyncRetryMixin = fetch => Vue.extend({
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

export default asyncRetryMixin;
