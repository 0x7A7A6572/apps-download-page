import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'


const app = createApp(App);
app.use(ElementPlus);
app.config.globalProperties.$ELEMENT = {
    size: "large"
}
app.mount('#app');
