import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import router from './router'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes = [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('../views/About.vue')
        }
    ]
})


createApp(App)
.use(router)
.mount('#app')
