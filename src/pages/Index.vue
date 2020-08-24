<template>
  <Layout>
    <div>   
      <div class="relative bg-cover bg-no-repeat bg-center"
          style="background-image: url(/assets/img/unlicensed/bg-hero.jpg)">
          <div class="absolute inset-0 z-10 bg-blue-800"></div>
          <div class="container pt-40 md:pt-56 lg:pt-60 pb-32 lg:pb-64">
            <div class="hero-slider z-20 relative" x-data x-init="slider('.hero-slider', 1, 1)">
              <div class="glide__track" data-glide-el="track">
                <div class="glide__slides">          
                    <div v-for="edge in $page.latests.edges" :key="edge.node.id" class="glide__slide flex flex-col lg:flex-row justify-between items-center">
                        <div class="z-30 text-center lg:text-left mb-16 md:mb-20 xl:pr-48">
                            <h4 class="font-body font-semi-bold text-primary text-sm md:text-lg uppercase tracking-widest">
                                {{ edge.node.subtitle }}</h4>
                            <h2 class="font-header text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl pt-2 xl:pt-5 leading-relaxed">
                                {{ edge.node.title }}</h2>
                            <g-link :to="edge.node.path" class="btn btn-primary btn-large mt-6 md:mt-8 lg:mt-10">READ MORE</g-link>
                        </div>
                        <div class="lg:flex lg:justify-end hidden xl:w-1/2">
                            <img src="https://d33wubrfki0l68.cloudfront.net/003c52259603632b9ed727356e8850f59c8bc176/35276/assets/img/unlicensed/hero-image.jpg"
                                class="h-72 md:h-76 lg:h-80 w-full md:mr-10 object-cover object-left"
                                alt="hero image"/>
                        </div>
                    </div>

            
                </div>

                <div class="glide__arrows absolute right-0 top-50 mt-16 lg:mt-0 transform lg:-translate-y-1/2 hidden lg:block"
                    data-glide-el="controls">
                    <div class="bg-white mr-5 group px-4 md:px-6 py-4 md:py-6 border-2  border-white hover:border-primary-lighter transition-colors mb-5"
                        data-glide-dir=">">
                        <i
                        class="bx bx-right-arrow-alt text-primary transition-colors group-hover:text-primary-lighter text-sm md:text-2xl"></i>
                    </div>
                    <div class="bg-white mr-5 group px-4 md:px-6 py-4 md:py-6 border-2 border-white hover:border-primary-lighter transition-colors "
                        data-glide-dir="<">
                        <i
                        class="bx bx-left-arrow-alt text-primary transition-colors group-hover:text-primary-lighter text-sm md:text-2xl"></i>
                    </div>
                </div>

              </div>
            </div>
          </div>
      </div>
    </div>

    <div class="bg-gray-300 py-72 relative z-20">
      <div class="container w-95/100 sm:w-9/10 lg:w-5/6 " v-for="edge in $page.moments.edges" :key="edge.node.id">
        <div class="-my-80 bg-white">
          <div class="container py-16 md:py-20">
            <div class="w-full sm:w-5/6 md:w-9/10 xl:w-5/6 mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
              <img src="https://d33wubrfki0l68.cloudfront.net/6be6b93ad9cc12356ac48a8afd3d60b89a2c328e/0b685/assets/img/unlicensed/about-us-image.jpg"
                  class="object-cover object-top lg:object-center shadow-2xl w-full lg:w-1/2 h-72 sm:h-80 md:h-88 lg:h-82"
                  alt="about featured image"/>
              <div
                  class="lg:w-1/2 text-center lg:text-left lg:ml-10 xl:ml-16 pb-12 md:pb-16 lg:pb-0">
                  <h4
                      class="font-body font-semi-bold text-primary text-sm md:text-lg uppercase tracking-widest">
                      ABOUT US</h4>
                  <h1
                      class="font-header text-black text-2xl sm:text-3xl md:text-4xl xl:text-5xl pt-2 xl:pt-5">
                      {{ edge.node.title }}</h1>
                  <p v-html="edge.node.excerpt"
                  class="font-body font-light text-black text-sm pt-8 lg:pt-6 pb-10 leading-loose"/>                     
                  <g-link :to="edge.node.path"
                  class="btn btn-primary btn-large">READ MORE</g-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative bg-cover bg-no-repeat bg-center"
        style="background-image: url(/assets/img/unlicensed/bg-cta.jpg)">
        <div class="absolute inset-0 z-10 bg-yellow-700"></div>
        <div class="container pb-20 md:pb-28 lg:pb-40 pt-40 md:pt-68 text-center">
            <div class="z-50 relative md:pb-20 pb-10">
                <h4
                    class="font-body font-semi-bold text-black text-sm md:text-lg uppercase tracking-widest">
                    WHY CHOOSE US?</h4>
                <h2
                    class="font-header text-white text-2xl sm:text-3xl md:text-4xl xl:text-5xl pt-2 xl:pt-5">
                    Let Our Competention Guide You</h2>
            </div>
            <div class="flex flex-wrap text-center z-50 relative">
                
                <div v-for="edge in $page.studies.edges" :key="edge.node.id" class="sm:w-5/6 md:w-1/2 lg:w-1/4 mx-auto group">
                    <g-link :to="edge.node.path">
                        <div class="bg-yellow-900 border border-b-0 lg:border-b md:border-r-0 last:border-r transition-all transform relative group-hover:scale-105 group-hover:z-100 border-primary group-hover:border-primary-lighter px-6 py-10 md:py-16">
                            <div class="group">
                                <img src="https://d33wubrfki0l68.cloudfront.net/cac2fb46be11ed30e0a3dc6870bf25dec8d051cc/d9396/assets/img/icons/icon-professional.svg"
                                    class="mx-auto block group-hover:hidden h-24 w-24"
                                    alt="icon"/>
                                <img src="https://d33wubrfki0l68.cloudfront.net/6bc043dcda0444a09179b698b3f7413a8c608509/83e6c/assets/img/icons/icon-professional-hover.svg"
                                    class="mx-auto hidden group-hover:block h-24 w-24"
                                    alt="icon hover state"/>
                            </div>
                            <h4 class="font-header text-white text-lg pt-8 md:pt-10">
                                {{ edge.node.title }}</h4>
                            <p
                            class="font-body font-light text-sm text-white pt-4 md:pt-6 pb-3 md:pb-6 leading-loose">
                                {{ edge.node.excerpt }}</p>
                        </div>
                    </g-link>
                </div>
    
            </div>
        </div>
    </div>

    <div class="bg-white" id="testimonial">
      <div class="container">
          <div class="my-20 md:my-24 md:mx-8">
              <div class="text-center pb-6 md:pb-16">
                  <h4 class="font-body font-semi-bold text-yellow-600 text-sm md:text-lg uppercase tracking-widest">
                      TESTIMONIALS</h4>
                  <h2 class="font-header text-black text-2xl sm:text-3xl md:text-4xl xl:text-5xl pt-2 xl:pt-5">
                      What Our Clients Say</h2>
              </div>
              <div class="relative flex flex-wrap md:flex-row justify-between -mx-3 xl:-mx-4 testimonials-slider"
                 x-data
                 x-init="slider('.testimonials-slider', 3, 2)">
                  <div data-glide-el="controls">
                      <div class="shadow absolute left-35 sm:left-40 md:left-0 top-10 md:top-50 transform md:-translate-y-1/2 md:-ml-6 xl:-ml-5 bg-primary transition-colors hover:bg-primary-lighter px-4 py-4 hover:border-primary-lighter mr-5 z-20 flex items-center"
                          data-glide-dir="<">
                          <i
                            class="bx bx-left-arrow-alt text-white text-sm md:text-2xl"></i>
                      </div>
                      <div class="shadow absolute right-35 sm:right-40 md:right-0 top-10 md:top-50 transform md:-translate-y-1/2 md:-mr-6 xl:-mr-5 bg-primary transition-colors hover:bg-primary-lighter px-4 py-4 hover:border-primary-lighter z-20 flex items-center"
                          data-glide-dir=">">
                          <i
                            class="bx bx-right-arrow-alt text-white text-sm md:text-2xl"></i>
                      </div>
                  </div>
                  <div class="glide__track" data-glide-el="track">
                    <div class="glide__slides">
                        <div v-for="edge in $page.posts.edges" :key="edge.node.id" class="glide__slide pt-20 md:pt-0 pb-10">
                            <div class="shadow-xl text-center md:text-left">
                                <g-link :to="edge.node.path"><img :src="edge.node.featured"
                                     class="object-cover object-top h-60 sm:h-68 md:h-64 w-full"
                                     alt="testimonial image"/></g-link>
                                <div class="px-6 md:px-8 py-8 md:py-10">
                                    <h4 class="font-header text-primary text-lg pb-5">
                                        <g-link :to="edge.node.path">{{ edge.node.title }}</g-link></h4>
                                    <p v-html="edge.node.summary" class="font-body font-light text-black text-sm leading-loose"/>
                                </div>
                            </div>
                        </div>
                        <div class="glide__slide pt-20 md:pt-0 pb-10">
                            <div class="shadow-xl text-center md:text-left">
                                <img src="https://d33wubrfki0l68.cloudfront.net/1e379de62c7d2f40b1148a9878c834b6ad5022d0/4dc05/assets/img/unlicensed/testimonial-04.jpg"
                                     class="object-cover object-top h-60 sm:h-68 md:h-64 w-full"
                                     alt="testimonial image"/>
                                <div class="px-6 md:px-8 py-8 md:py-10">
                                    <h4
                                        class="font-header text-primary text-lg pb-5">
                                        Allison Hensley</h4>
                                    <p
                                       class="font-body font-light text-black text-sm leading-loose">
                                        Lorem ipsum dolor sit amet elit. Phasellus ac imperdiet tellus. Id nisl semper, bibendum velit id, blandit ex. Proin id fermentum ipsum. Sed a rutrum nisi. Integer id accumsan.</p>
                                </div>
                            </div>
                        </div>
                        <div class="glide__slide pt-20 md:pt-0 pb-10">
                            <div class="shadow-xl text-center md:text-left">
                                <img src="https://d33wubrfki0l68.cloudfront.net/f89697391be6369d01e4a932628c1e35432a5937/19756/assets/img/unlicensed/testimonial-03.jpg"
                                     class="object-cover object-top h-60 sm:h-68 md:h-64 w-full"
                                     alt="testimonial image"/>
                                <div class="px-6 md:px-8 py-8 md:py-10">
                                    <h4
                                        class="font-header text-primary text-lg pb-5">
                                        Dennis Hertz</h4>
                                    <p
                                       class="font-body font-light text-black text-sm leading-loose">
                                        Lorem ipsum dolor sit amet elit. Phasellus ac imperdiet tellus. Id nisl semper, bibendum velit id, blandit ex. Proin id fermentum ipsum. Sed a rutrum nisi. Integer id accumsan.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    </div>    
  </Layout>
</template>

<page-query>
query{
  latests: allLatest{
    edges{
      node{
        id
        title
        subtitle   
        path     
      }
    }
  }
  moments: allMoment{
    edges{
      node{
        id
        title
        featured
        excerpt
        path
      }
    }
  }  
  studies: allStudi{
    edges{
      node{
        id
        title
        excerpt
        content
        path
      }
    }
  }
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
  
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Welcome'
  }
}
</script>