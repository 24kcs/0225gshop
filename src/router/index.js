// 引入Vue
import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'
// 引入路由的相关配置的文件
import routes from './routes.js'
// 声明使用插件
Vue.use(VueRouter)
// 向外暴露
export default new VueRouter({
  mode: 'history', // 没有#
  routes
})
