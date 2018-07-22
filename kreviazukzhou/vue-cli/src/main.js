// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router' // +++1、导入路由组件
import router from './approuter' // +++2、导入我们自己写的路由配置文件

Vue.config.productionTip = false;
// +++ 3、使用路由组件
Vue.use(VueRouter);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})