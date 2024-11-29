import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/home.vue';
import About from './views/about.vue';
import Projects from './views/projects.vue';
import Skills from './views/skills.vue';
import Experience from './views/experience.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/aboutme', component: About},
    { path: '/projects', component: Projects},
    { path: '/skills', component: Skills},
    { path: '/experience', component: Experience},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router