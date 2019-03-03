import Vue from 'vue'
import Router from 'vue-router'
import routeConfig from './routes'
import store from '../store';

// import Login from '@/views/login/index'
Vue.use(Router)

const router =  new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: routeConfig
})
router.beforeEach((to, from, next) =>{
  let value = to.query.src ? to.query.src : to.path;
  let notTagLists = ['/404'];
  console.log(store)
  // if (notTagLists.indexOf(value) === -1) {
  //   store.commit('ADD_VISITED_VIEW', {
  //     path:to.path,
  //     name:to.meta.name
  //   })
  // }
  next();
})
export default router