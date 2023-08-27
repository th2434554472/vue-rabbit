import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

//测试函数接口
import { getCategory } from './apis/testAPI' 
getCategory().then(res => {
    console.log(res);
})
