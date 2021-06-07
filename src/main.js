import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import axios from 'axios'
import VueAxios from 'vue-axios'

import Vant from 'vant';
import 'vant/lib/index.css';

//element-ui
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';



createApp(App).use(store).use(router).use(Vant).use(VueAxios,axios).use(ElementPlus).mount('#app')
