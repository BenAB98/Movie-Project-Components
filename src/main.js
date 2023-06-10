import "./assets/style.css";

import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";

import { createApp } from 'vue';
import App from './App.vue';

createApp(App).component("HeaderComponent",HeaderComponent).component("FooterComponent",FooterComponent).mount('#app');
