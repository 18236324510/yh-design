import { createApp } from 'vue';
import App from './app.vue';
import yh from '@yh/components';
const app = createApp(App);
app.use(yh);

app.mount('#app');
