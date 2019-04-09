import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter)

// const Home = {
//   template:'<h1>Home</h1>'
// };
// const Article = {
//   template:'<h1>Article</h1>'
// }

const Home = resolve => require(['./components/Home.vue'], resolve);
const Article = resolve => require(['./components/Article.vue'], resolve);
const About = resolve => require(['./components/About.vue'], resolve);

const router = new VueRouter({
  routes: [{
    name: 'home', path: '/', component: Home
  },{
    name: 'article', path: '/article/:id', component: Article
  },{
    name: 'about', path: '/about', component: About
  }]
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
