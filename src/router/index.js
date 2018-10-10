import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle } from "../lib/utils";
import store from '@/store'

Vue.use(Router);

const router = new Router({
    routes,
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    const TOCKEN = store.state.TOCKEN;
    const HAS_LOGINED = !!TOCKEN;
    to.meta && setTitle(to.meta.title);
    if (to.name !== 'login') {
        if (HAS_LOGINED) next();
        // 这里next的用法和push一样的
        else next({ name: 'login' })
    } else {
        if (HAS_LOGINED) next({ name: 'home' });
        else next()
    }
});
export default router
