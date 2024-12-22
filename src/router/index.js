import { createMemoryHistory, createRouter } from 'vue-router'

import CardView from '../CardView.vue'
import App from '../App.vue'

const routes = [
  { path: '/', component: App },
  { path: '/:id', component: CardView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router