// 导入vue
import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'

// 引入组件模块
import Home from '../pages/home/Home'
import Classify from '../pages/classify/Classify'
import Cart from '../pages/cart/Cart'
import Mine from '../pages/mine/Mine'

// 安装模块
Vue.use(VueRouter);

// 配置路由规则
const routes = [
    { path: '/home', component: Home},
    { path: '/classify', component: Classify},
    { path: '/cart', component: Cart},
    { path: '/mine', component: Mine},
]

// 创建路由实例
const router = new VueRouter({
    // 挂载
    routes
});

// 导出
export default router;

