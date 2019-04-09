<style>
.menus {
  display: flex;
  flex-direction: row;
  margin: 1em 0;
  padding-inline-start: 0;
}
.menus li {
  flex: 1;
  text-align: center;
  /* font-size: 1em; */
}
.menus li a {
  font-size: 1.2em;
  color: #3f51b5;
  text-decoration: none;
}
</style>

<template>
  <ul class="menus">
    <li v-for="m in menuList"><a href="#" @click="directTo(m)">{{m.text}}</a></li>
  </ul>
</template>
<script>
export default {
  data(){
    return {
      menuList: [{
        name: 'about',
        text: '关于我',
      }, {
        name: 'tech',
        text: '技术',
      }, {
        name: 'psy',
        text: '心理',
      }, {
        name: 'book',
        text: '读书',
      }, {
        name: 'travel',
        text: '旅行',
      }]
    }
  },
  methods: {
    directTo(m) {
      console.log(m.name);
      if(m.name == 'about') {
        this.$router.push({name: 'about'})
      } else {
        this.$router.push({name: 'home', query: {type: m.name}})
      }
    }
  }
}
</script>

