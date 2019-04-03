import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home/Home'
import Photo from 'components/Photo/Photo'
import Result from 'components/Result/Result'
import Skin from 'components/Skin/Skin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/photo',
      component: Photo
    },
    {
      path: '/result',
      component: Result
    },
    {
      path: '/skin',
      component: Skin
    }
  ]
})
