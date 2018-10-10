import Home from '@/views/Home.vue'

export default [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: () => import(/* webpackChunkName: "about" */ '@/views/Login.vue')
        },
        {
            path: '/about',
            name: 'about',
            // router level code-splitting
            // this generates a separate chunk (about.[hash].js) for this router
            // which is lazy-loaded when the router is visited.
            component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
            meta: {
                title: '关于'
            }
        },
        {
            path: '/argu/:home',
            component: () => import(/* webpackChunkName: "about" */ '@/views/Argu.vue'),
            props: true
            // props: {
            //     home: 'banana'
            // }
        },
        {
            path: '/store',
            component: () => import('@/views/Store.vue'),
        },
        {
            path: '/email',
            component: () => import('@/views/email.vue'),
        },
        {
            path: '/tel',
            component: () => import('@/views/Tel.vue'),
        }
        // {
        //     path: '/named_view',
        //     component: () => import('@/views/Tel.vue'),
        // }
    ]
