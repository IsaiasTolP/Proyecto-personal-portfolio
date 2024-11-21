import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import i18n from "./i18n.ts";

createApp(App).mount('#app');
App.use(i18n);