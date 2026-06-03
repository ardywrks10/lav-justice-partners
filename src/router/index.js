import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BookView from '../views/BookView.vue';

const routes = [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/booking', name: 'Booking', component: BookView}
];

const router = createRouter({
    history: createWebHistory(), routes,
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