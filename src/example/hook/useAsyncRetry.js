function useAsyncRetry(vm, fetch) {
  const props = {
    loading: true,
    data: null,
    error: null,
  };
  const fetchData = async () => {
    props.loading = true;
    props.error = null;
    try {
      props.data = await fetch();
    } catch (e) {
      props.error = e.message;
    }
    props.loading = false;
  };

  props.retry = fetchData;
  vm.$on('hook:created', fetchData);
  return props;
}
export default useAsyncRetry;
