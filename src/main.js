import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

// const app = new Vue({ <----- v2
// })
// router, vuex <---
// createRouter
// createStore

const app = createApp(App)
app.use(store)

.mount('#app')
