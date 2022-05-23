import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('./pages/index.vue') },
    { path: '/tsx', component: () => import('./pages/tsx/testTsx') },
  ],
})
app.config.errorHandler = (...ars) => {
  console.log(ars);
}
app.use(router)


app.component('test-cmp', {
  template: `<div class="demo-tab">Archive component</div>`,
  // render() { return h('div', 'Archive component') },
})


app.mount('#app')
