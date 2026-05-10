import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProgramDetail from '../views/ProgramDetail.vue';

const routes = [
    { path: '/', name: 'Home', component: HomeView },
    { 
        path: '/program/:slug', 
        name: 'ProgramDetail', 
        component: ProgramDetail,
        props: true 
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 };
    }
});

export default router;