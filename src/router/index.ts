import { createRouter, createWebHistory } from 'vue-router';

const routes: Array<any> = [
    {
        path: '/',
        name: 'Dashboard',
        component: () =>
            import(/* webpackChunkName: 'dashboard' */ '../views/Dashboard.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: () => '/'
    }
];

const router = createRouter({
    history: createWebHistory( process.env.BASE_URL ),
    routes
});

export default router;
