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
      artcList: [{
        id: 3,
        type: 'module',
        name: 'books',
        title: '[置顶]从2018年起，每周阅读一本书',
        created: '2019-04-10',
        tags: '读书',
        overview: '每周读一本书'
      },{
        id: 1,
        type: 'article',
        title: '[原创]价值判断怎么破坏你的生活?',
        created: '2019-03-26',
        tags: '心理,社交',
        overview: '为什么有的人很难按照自己所想去生活，并且在社交生活中表现的难以合群。'
      }, {
        id: 2,
        type: 'tech',
        title: '[译]Flask Web Development (更新到第八章）',
        created: '2015-07-08',
        tags: 'Flask,Python',
        url: "http://tangyefei.cn:81/#/books/flask-web-development",
        overview: '因为开发使用的缘故，提供该图书的英文版的简明扼要的翻译。'
      }],
    }
  },
  methods: {
    directTo(m) {
      // console.log(m.name);
      if(m.type == 'article') {
        this.$router.push({ name: 'article', params: { id: m.id } })
      } else if(m.type == 'tech') {
        window.open(m.url, '_blank');
      } else if(m.type == 'module') {
        this.$router.push({ name: 'books' })
      }
    }
  }
}
</script>

