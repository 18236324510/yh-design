import { createApp } from 'vue'
import App from './app.vue'
import yh from '@yh/components'
import '@yh/components/styles/index.less'
const app = createApp(App)
app.use(yh)

app.mount('#app')
