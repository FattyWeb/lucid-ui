import { createApp } from 'vue'
import TestContainer from './TestContainer.vue'
import 'boxicons/css/boxicons.min.css'
// import '../src/styles/index'
import Lucid from '../src/index'
const app = createApp(TestContainer);

app.use(Lucid);

app.mount('#app');
