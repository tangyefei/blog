<template>
  <div id="app">
    <router-view></router-view>
    <footer> © Copyright 2019 Yefei Tang </footer>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 920px;
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
}
html,body, p, h1, h2, h3, h4, h5, h6,ul,ol,li{
  margin: 0;
  padding: 0;
}
ul, ol, li {
  list-style: none;
}
.bold {
  font-weight: bold;
  font-size: 1.1em;
}
body {
  margin: 0 auto;
  max-width: 700px;
  font-size: 14px;
}
footer {
  text-align: center;
  color: #AAA;
  margin: 20px;
  position: absolute;
  width: 100%;
  top: 100%;
}
</style>
