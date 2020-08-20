<template>
    <Layout>
        <div class="pt-24 relative bg-cover bg-no-repeat bg-center" style="background-image: url(/assets/img/unlicensed/bg-inner-hero.jpg);">
            <div class="absolute bg-cover inset-0 z-10 bg-grey-darker"></div>
            <div class="py-20 md:py-32 lg:py-36 z-20 relative text-center">
                <h1 class="font-header text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    Case Study</h1>
            </div>
        </div>       
        <div class="container my-16 md:my-20 lg:my-24 flex flex-col-reverse lg:flex-row justify-between">
            <div class="sm:w-2/3 md:w-2/5 lg:w-3/10 mx-auto lg:mx-0 pt-12 md:pt-20 lg:pt-0 md:pr-24">
                <div>
                    <div class="flex items-center justify-between">
                        <div class="w-1/2 md:w-2/5 lg:w-3/5 xl:w-1/2">
                            <h3 class="font-header text-black text-xl md:text-2xl">
                                Recent Cases</h3>
                        </div>
                        <div class="flex-1 h-1 bg-primary ml-2"></div>
                    </div>  
                    <a href="/case-study"  class="block pt-8 group">
                        <div
                            class="flex justify-between border-b border-grey-light pb-8">
                            <div class="w-1/6 lg:w-1/5">
                                <span
                                    class="font-body font-semi-bold text-primary text-5xl">1</span>
                            </div>
                            <div class="w-5/6 lg:w-4/5">
                                <h3
                                    class="font-body font-bold text-black group-hover:text-primary transition-colors text-sm md:text-base uppercase">
                                    MOTOR EHICLE LIABILITY</h3>
                                <p
                                class="font-body font-light text-black text-sm pt-2 leading-loose">
                                    Duis vel magna eu urna urice tempor. Nua qui ex mollis vel urna nec, autor portir velit donec luctus sollicitudin...</p>
                            </div>
                        </div>
                    </a> 
                    <a href="/case-study"
                        class="block pt-8 group">
                        <div
                            class="flex justify-between border-b border-grey-light pb-8">
                            <div class="w-1/6 lg:w-1/5">
                                <span
                                    class="font-body font-semi-bold text-primary text-5xl">2</span>
                            </div>
                            <div class="w-5/6 lg:w-4/5">
                                <h3
                                    class="font-body font-bold text-black group-hover:text-primary transition-colors text-sm md:text-base uppercase">
                                    TAX CONTROVERSY</h3>
                                <p
                                class="font-body font-light text-black text-sm pt-2 leading-loose">
                                    Duis vel magna eu urna urice tempor. Nua qui ex mollis vel urna nec, autor portir velit donec luctus sollicitudin...</p>
                            </div>
                        </div>
                    </a>         
                </div> 
            </div>        
            <div class="w-full sm:w-9/10 lg:w-3/5 mx-auto lg:mx-0">
                <h2 class="font-header text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    {{ $page.post.title }}</h2> 
                <div class="flex flex-col md:flex-row justify-between pt-6 ">                  
                    <img :src="$page.post.featured" alt="Image" class="bg-cover bg-no-repeat bg-top shadow-2xl">
                </div>
                <p v-html="$page.post.content" class="font-body font-light text-sm text-black pt-5 md:pt-8  leading-loose" />                               
            </div>
        </div>
    </Layout>
</template>

<page-query>
    query Post($path:String!){
        post: post(path:$path){
            title
            content
            date
            featured
            summary
        }
    }
</page-query>

<script>
export default {
    metaInfo(){
        return{
            title: this.$page.post.title
        }
    }
}
</script>