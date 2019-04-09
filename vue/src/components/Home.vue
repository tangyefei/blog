<style>

  .home-page {
    margin-top: 60px;
    margin: 0 25px;
    min-height: 100vh;
    position: relative;
  } 
  
  .home-page .intro {
    text-align: center;
    margin: 2em 0 0;
  }
  .home-page .intro  h3 {
    margin: 1em 0 0;
    font-size: 2em;
  }
  .home-page .intro p {
    color: #999;
  }
  .home-page .intro p span {
    font-size: 1.5em;
  }
  .home-page .intro .avatar {
    display: inline-block;
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background: url(../images/avatar.jpg) no-repeat 50% 50% / auto 100%;
  }

  .home-page .article-container {
    margin-top: 50px;

  }

  .home-page .article-container .article {
    border-bottom: 1px dotted #AAA;
    padding: 8px 5px;
  }

  .home-page .article-container .article .meta {
    color: #aaa;
    line-height: 2em;
  }

  .home-page .article-container .article .meta .created-date {
    margin-right: 20px;
  }

  .home-page .article-container .article .overview {
    color: #444;
    font-size: 1.1em;
    line-height: 2em;
  }

  .home-page .article-container .article h3 {
    color: #1a89e1;
  }
  .home-page .article-container .article h3:hover {
    cursor: pointer;
    color: #0d90f7;
  }




</style>

<template>
  <div class="home-page">
    <div class="intro">
      <span class="avatar"></span>
      <p><span>“</span> 蔑视命运。如果你确定了自己的标准，你对自己的生活会有大得多的控制。<span>”</span> &nbsp;&nbsp;&nbsp;《黑天鹅》</p>
      <h3>Yefei 前端工程师</h3>
    </div>
    <Menus></Menus>
    <div class="article-container">
      <div class="article" v-for="artc in artcList">
        <h3 @click="directTo(artc)">{{artc.title}}</h3>
        <p class="meta"><span class="created-date">{{artc.created}}</span><span class="tag">{{artc.tags}}</span></p>
        <p class="overview">{{artc.overview}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Menus from './subs/Menus.vue';
export default {
  components: {
    Menus
  },
  data() {
    return {
      message: 'Hello Vue!',
      artcList: [{
        id: 1,
        title: '[原创]价值判断怎么破坏你的生活?',
        created: '2019-03-26',
        tags: '心理,社交',
        overview: '为什么有的人很难按照自己所想去生活，并且在社交生活中表现的难以合群。'
      }],
    }
  },
  methods: {
    directTo(m) {
      // console.log(m.name);
      this.$router.push({
        name: 'article',
        params: {
          id: m.id
        }
      })
    }
  }
}
</script>

