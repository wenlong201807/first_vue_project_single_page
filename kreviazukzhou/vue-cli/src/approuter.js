import VueRouter from 'vue-router' // 导入路由模块    
import Home from './components/home.vue' // 导入Home组件
import User from './components/user.vue'
import Product from './components/product.vue'

export default new VueRouter({ // 定义路由规则对象
    routes: [
        { path: '/home', component: Home },
        { path: '/user/:id', component: User },
        { path: '/product/:id', component: Product }
    ]
})