import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProgramDetail from '../views/ProgramDetail.vue';
import JobSection from '../views/JobSection.vue';

const routes = [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/program/:slug', name: 'ProgramDetail', component: ProgramDetail, props: true },
    { path: '/karir', name: 'JobSection', component: JobSection, props: true}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
                top: 80, 
            };
        }
        return savedPosition || { top: 0 };
    }
});

export default router;