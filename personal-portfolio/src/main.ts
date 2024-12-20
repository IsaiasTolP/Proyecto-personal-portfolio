import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n.ts';
import router from './router.ts';

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount('#app')