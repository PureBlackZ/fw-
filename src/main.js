import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import child1 from './components/child1.vue'
import child2 from './components/child2.vue'

Vue.use(VueRouter)
 let router = new VueRouter({
   routes:[
     {
       path:'/',
       component:child1
     },
     {
       path:'/a',
       component:child2
     }
   ]
 })
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
