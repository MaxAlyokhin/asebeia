// Подключаем vue и плагины
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// Подключаем компоненты и делим на чанки
function Hello() { 
    return require.ensure([], function() {
        return require('./components/hello.vue')
    })
}
function News() { 
    return require.ensure([], function() {
        return require('./components/news.vue')
    })
}
function Books() { 
    return require.ensure([], function() {
        return require('./components/books.vue')
    })
}
function About() { 
    return require.ensure([], function() {
        return require('./components/about.vue')
    })
}

Vue.use(VueResource)
Vue.use(VueRouter)

var router = new VueRouter({
    //Привязываем маршруты к компонентам
    routes: [
        {path: '/', redirect: '/hello' },
        {path: '/hello', component: Hello},
        {path: '/news', component: News},
        {path: '/books', component: Books},
        {path: '/about', component: About}
    ]
})

// Создаём экземпляр vue
new Vue({
  el: '#app',

  router: router,

  data: {
    isClicked: false
  },

  methods: {
        blackFunction: function() { /* Переключатель цвета меню. Если true, то присваивается класс black в index.html */
            this.isClicked = true
        },

        whiteFunction: function() { /* Переключатель цвета меню. Если false, то присваивается класс white в index.html */
            this.isClicked = false
        }
    }
})

