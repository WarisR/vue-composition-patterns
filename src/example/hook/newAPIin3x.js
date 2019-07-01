import { value, onCreated } from 'vue';
function useAsyncRetry(fetch) {
  const loading = value(true);
  const data = value(null);
  const error = value(null);
  const fetchData = async () => {
    loading.value = true;
    error.value = null;
    try {
      data.value = await fetch();
    } catch (e) {
      error.value = e.message;
    }
    loading.value = false;
  };
  onCreated(fetchData);
  return {
    loading,
    data,
    error,
    retry: fetchData
  };
}
export default useAsyncRetry;
