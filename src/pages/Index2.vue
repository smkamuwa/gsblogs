<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <div  v-for="edge in $page.homes.edges" :key="edge.node.id">
      <div v-html="edge.node.content"/>
    </div>
    
    <h2>Hot News</h2>
    <ul>
      <li v-for="edge in $page.posts.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">
          {{ edge.node.title }}
        </g-link>
        <div class="text-copy-secondary mb-4">
          <span>{{ edge.node.date }}</span>
          <span> &middot; </span>
          <span>{{ edge.node.timeToRead }} min read</span>
        </div>
        <img :src="edge.node.featured" alt="Image">
        <div v-html="edge.node.summary"/>
      </li>
    </ul>

  </Layout>
</template>

<page-query>
query{
  posts: allPost{
    edges{
      node{
        id
        title
        path
        date
        featured
        summary
      }
    }
  }
  homes: allHome{
    edges{
      node{
        id
        title
        content
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
