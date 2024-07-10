import { boot } from 'quasar/wrappers';
import { PrefixKey } from '@/utils/constants';
export default boot(({ router, ssrContext, store, redirect }) => {
  console.log('test', PrefixKey);
  router.beforeEach((to, from, next) => {

    next();
  });
});
