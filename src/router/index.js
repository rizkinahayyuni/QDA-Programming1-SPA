import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/components/pages/HomePage';
import AboutPage from '@/components/pages/AboutPage';
import ActionPage from '@/components/pages/ActionPage';
import ArticlePage from '@/components/pages/ArticlePage';
import BlogPage from '@/components/pages/BlogPage';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/blog',
      name: 'BlogPage',
      component: BlogPage
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    },
    {
      path: '/action',
      name: 'ActionPage',
      component: ActionPage
    },
    {
      path: '/contact',
      name: 'ArticlePage',
      component: ArticlePage
    }
  ]
})
