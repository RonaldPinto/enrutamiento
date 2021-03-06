import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { rutas } from './router.js'
import VuePaginate from 'vue-paginate'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VuePaginate);

const enrutador = new VueRouter({
    routes: rutas,
    mode: 'history'
})

new Vue({
    el: '#app',
    router: enrutador,
    render: h => h(App)
})