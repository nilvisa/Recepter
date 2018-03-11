import Vue from 'vue'
import Router from 'vue-router'
import Randomizer from '@/components/Randomizer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Randomizer',
      component: Randomizer
    }
  ]
})
