import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Skills from '../views/Skills.vue'
import Experience from '../views/Experience.vue'
// import Blog from '../views/Blog.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/skills', component: Skills },
    { path: '/experience', component: Experience },
    // { path: '/blog', component: Blog }
]

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})