import { createApp } from 'vue'
import App from './app.vue'
import yh from '@yh/components'
import '@yh/components/styles/index.less'
import router from './router'
const app = createApp(App)
app.use(yh).use(router)

app.mount('#app')
