import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'

const app = createApp(App)

const modulesFiles = import.meta.globEager('./pages/template/*')

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const modules = Object.entries(modulesFiles).map(([path, mod]) => {
  const regex = /^\.\/pages\/template\/(.*)\.vue$/
  const moduleName = path.replace(regex, '$1')
  console.log(path)
  return {
    path: `/${moduleName}`,
    component: () => defineAsyncComponent(() => import(/* @vite-ignore */ path)),
  }
})
const comp = './pages/template/comp.vue'
const aa = 'template'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('./pages/index.vue') },
    { path: '/tsx', component: () => import('./pages/tsx/testTsx') },
    { path: '/storage', component: () => import('./pages/storage/storage') },
    { path: '/comp', component: () => import(/* @vite-ignore */ `${comp}`) },
    // { path: '/comp', component: () => import(`./pages/${aa}/comp.vue`) },

    // ...modules,
  ],
})
app.config.errorHandler = (...ars) => {
  console.log(ars)
}
app.use(router)

app.component('TestCmp', {
  template: '<div class="demo-tab">Archive component</div>',
  // render() { return h('div', 'Archive component') },
})

app.mount('#app')
