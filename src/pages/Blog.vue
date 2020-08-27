<template>
    <Layout>
        <div class="pt-24 relative bg-cover bg-no-repeat bg-center" style="background-image: url(/assets/img/unlicensed/bg-inner-hero.jpg);">
            <div class="absolute bg-cover inset-0 z-10 bg-grey-darker"></div>
            <div class="py-20 md:py-32 lg:py-36 z-20 relative text-center">
                <h1 class="font-header text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                   Blog</h1>
            </div>
        </div> 

        <div class="flex flex-wrap text-center z-50 relative">
          <div v-for="post in $page.posts.edges" :key="post.id" class="sm:w-5/6 md:w-1/2 lg:w-1/3 p-2 md:px-2 mx-auto group">
            <div class="shadow-xl text-center md:text-left">
              <g-link :to="post.node.path"><img :src="post.node.featured"
                  class="object-cover object-top h-60 sm:h-68 md:h-64 w-full"
                  alt="testimonial image"/></g-link> 
              <div class="px-6 md:px-8 py-8 md:py-10">
                  <h4 class="font-header text-primary text-lg pb-5">
                      <g-link :to="post.node.path">{{ post.node.title }}</g-link></h4>
                  <p v-html="post.node.summary" class="font-body font-light text-black text-sm leading-loose"/>
              </div> 
            </div>
          </div>  
        </div>        
       
        <pagination-posts
          v-if="$page.posts.pageInfo.totalPages > 1"
          base="/blog"
          :totalPages="$page.posts.pageInfo.totalPages"
          :currentPage="$page.posts.pageInfo.currentPage"
        />
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 3, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        featured
        date (format: "MMMM D, Y")
        summary
        timeToRead
        path
      }
    }
  }
}
</page-query>

<script>
import PaginationPosts from '../components/PaginationPosts'

export default {
  metaInfo: {
    title: 'Blog'
  },
  components: {
    PaginationPosts
  }
}
</script>
