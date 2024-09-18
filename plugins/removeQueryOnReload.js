export default defineNuxtPlugin((nuxtApp) => {
    const router = useRouter();
  
    router.afterEach((to, from) => {
      if (process.client && to.query.task_key) {
        // Create a copy of the current query object without the 'task_key'
        const { task_key, ...remainingQuery } = to.query;
  
        // Push the new URL without 'task_key' query parameter
        setTimeout(()=>{
          router.replace({ query: remainingQuery });
        }, 1500);
      }
    });
  });