/*
 * @Author: your name
 * @Date: 2020-02-08 15:56:32
 * @LastEditTime: 2020-03-01 01:16:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lpw-app\src\main.js
 */
import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueLazyLoad from 'vue-lazyload';




Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: require('@/assets/img/jz/002.png'),
  loading: require('@/assets/img/jz/001.gif'),
  attempt: 1
})

//1.引入axios库
import axios from "axios";
//2.配置跨域访问保留session
axios.defaults.withCredentials = axios;
//3.将axios库配置vue是咧对象中
Vue.prototype.axios = axios;

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


