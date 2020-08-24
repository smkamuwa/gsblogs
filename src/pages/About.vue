<template>
    <Layout>
        <div class="pt-24 relative bg-cover bg-no-repeat bg-center" style="background-image: url(/assets/img/unlicensed/bg-inner-hero.jpg);">
            <div class="absolute bg-cover inset-0 z-10 bg-grey-darker"></div>
            <div class="py-20 md:py-32 lg:py-36 z-20 relative text-center">
                <h1 class="font-header text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                   Tentang Kami</h1>
            </div>
        </div>
        <div class="container py-16 md:py-20 lg:py-28">
          <div class="text-center mx-auto md:mx-0">
              <h2
                  class="font-header text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  Deeper Understanding, Better Solutions.
              </h2>
              <p
                class="font-body font-light text-sm text-black pt-5 pb-4 leading-relaxed leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel laoreet risus. Etiam diam diam, porttitor vel urna nec, auctor porttitor velit. Donec luctus sollicitudin nulla ut rutrum. Donec congue molestie efficitur. Etiam a diam vitae justo interdum rhoncus. Curabitur vitae fringilla felis, eu faucibus nisl.</p>
          </div>  
        </div> 
        
        <div class="flex flex-wrap p-4 pt-5 md:pt-8 lg:pt-12 -mx-3 lg:-mx-5">        
          <div class="sm:w-5/6 md:w-1/2 mx-auto group md:px-3 lg:px-5 mb-10">
              <div
                  class="transition-all transform hover:scale-105 text-center md:text-left border border-grey-light shadow-none hover:shadow-lg">
                  <img src="https://d33wubrfki0l68.cloudfront.net/9d41cf1439731be5876f21523bdc3dbdab239f25/52b6d/assets/img/unlicensed/case-study-01.jpg"
                      class="object-cover object-center h-60 sm:h-68 md:h-64 lg:h-68 w-full"
                      alt="case study featured image"/>
                  <div class="px-6 md:px-8 pt-8 md:pt-12 pb-10 md:pb-20">
                      <h4
                          class="font-body text-primary text-xl md:text-2xl pb-5 uppercase">
                          BREACH OF CONTRACT
                      </h4>
                      <p
                        class="font-body font-light text-black text-sm leading-loose pb-8">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac imperdiet tellus. Suspendisse id nisl semper, bibendum velit id, blandit ex. Proin id fermentum ipsum.</p>
                      <a href="/case-study"
                        class="btn btn-primary btn-large">READ MORE</a>
                  </div>
              </div>
          </div>
          <div class="sm:w-5/6 md:w-1/2 mx-auto group md:px-3 lg:px-5 mb-10">
            <div
                 class="transition-all transform hover:scale-105 text-center md:text-left border border-grey-light shadow-none hover:shadow-lg">
                <img src="https://d33wubrfki0l68.cloudfront.net/ed31a77ac06580a0469549208876be4b73f0cf80/29491/assets/img/unlicensed/law-services.jpg"
                     class="object-cover object-center h-60 sm:h-68 md:h-64 lg:h-68 w-full"
                     alt="case study featured image"/>
                <div class="px-6 md:px-8 pt-8 md:pt-12 pb-10 md:pb-20">
                    <h4
                        class="font-body text-primary text-xl md:text-2xl pb-5 uppercase">
                        TAX LITIGATION
                    </h4>
                    <p
                       class="font-body font-light text-black text-sm leading-loose pb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac imperdiet tellus. Suspendisse id nisl semper, bibendum velit id, blandit ex. Proin id fermentum ipsum.</p>
                    <a href="/case-study"
                       class="btn btn-primary btn-large">READ MORE</a>
                </div>
            </div>
        </div>
        </div>
        
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>
