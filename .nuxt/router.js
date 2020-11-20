import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _095da955 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _5a1a5c1c = () => interopDefault(import('..\\pages\\books.vue' /* webpackChunkName: "pages_books" */))
const _035f443b = () => interopDefault(import('..\\pages\\news.vue' /* webpackChunkName: "pages_news" */))
const _6a7a0e70 = () => interopDefault(import('..\\pages\\someday.vue' /* webpackChunkName: "pages_someday" */))
const _2915841a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _095da955,
    name: "about"
  }, {
    path: "/books",
    component: _5a1a5c1c,
    name: "books"
  }, {
    path: "/news",
    component: _035f443b,
    name: "news"
  }, {
    path: "/someday",
    component: _6a7a0e70,
    name: "someday"
  }, {
    path: "/",
    component: _2915841a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
