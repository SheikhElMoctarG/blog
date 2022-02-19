<template>
  <div dir="rtl" class="">
      <!-- inbox title,date,author, image -->
      <div class="flex items-center justify-between flex-col mt-4 lg:mt-8">
        <div class="flex flex-1 flex-col mb-8">
          <!-- title -->
          <h1 class="text-2xl lg:text-3xl font-semibold mb-4 leading-normal">{{article.title}}</h1>
        <!-- inbox  date - author -->
      <div class="flex justify-between">
          <!-- author -->
        <div class="inline-flex items-center rounded-full pl-1 bg-gray-100">
            <img :src="require(`~/content/images/author/${article.author.image}`)" :alt="article.author.bio" class="inline-block h-6 w-6 rounded-full border">
            <span class="mx-2">{{article.author.name}}</span>
        </div>
        <!-- edit -->
        <div class="text-gray-600 flex items-center justify-center">
            <img :src="require(`~/assets/icons/edit.svg`)" class="w-5 h-5 mx-1">
            <span>{{ $moment(article.createdAt).format("YYYY MMM DD") }}</span>
        </div>
      </div>
      <!-- image post -->
      </div>
      <div class="w-full overflow-hidden h-15 flex justify-center items-center px-3 md:px-0">
          <img :src="require(`~/content/images/${article.img}`)" :alt="article.alt" class="w-full rounded-md">
      </div>
      </div>

      <content-post :toc="article.toc"/>  
      <!-- content -->
      <nuxt-content :document="article" class="mt-8 lg:mt-12"/>
      <!-- tags -->
      <div class="flex mt-4">
          <tags v-for="tag of article.tags" :key="tag">
              {{tag}}
          </tags>
      </div>
      <prev-next :prev="prev" :next="next" class="mt-8 lg:mt-12"/>
      <line-bottom text="المؤلف"/>
      <div class="flex justify-center items-center">
        <author :author="article.author"/>
      </div>
      
  </div>
</template>

<script>
import Author from '../components/author.vue';
import ContentPost from '../components/ContentPost.vue';
import LineBottom from '../components/LineBottom.vue';
import PrevNext from '../components/PrevNext.vue';
import Tags from '../components/tags.vue';
export default {
  components: { PrevNext, ContentPost, Tags, Author, LineBottom },
    async asyncData({$content, params}){
        const article = await $content("articles", params.slug).fetch();
        const [prev,next] = await $content("articles").only(['title','slug'])
                                 .sortBy('createdAt', 'asc')
                                 .surround(params.slug).fetch()
        return {article, prev,next}
    },
    layout: 'homepage',
    head(){
        return{
            title: this.article.title,
            meta: [
            { property: "og:site_name", content: "تدوينات" },
            { hid: "og:type", property: "og:type", content: "website" },
            {
                hid: "og:url",
                property: "og:url",
                content: "https://sheikhelmoctarg.github.io/blog/"+this.article.slug,
            },
            {
                hid: "og:title",
                property: "og:title",
                content: this.article.title,
            },
            {
                hid: "og:description",
                property: "og:description",
                content: this.article.description,
            },
            {
                hid: "og:image",
                property: "og:image",
                content: require(`~/content/images/${this.article.img}`),
            },
            { property: "og:image:width", content: "740" },
            { property: "og:image:height", content: "300" },
        ]
        }
        
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cairo&display=swap');
body{
  font-family: 'Cairo', sans-serif;
}
.nuxt-content{
    direction: rtl;
    text-align: right;
}
.nuxt-content h1{
    @apply text-lg font-semibold mt-2 border-b-2 text-emeral-500-color ;
    line-height: 1.75rem;
}
.nuxt-content h2{
    @apply text-xl font-semibold mt-2 border-b-2 text-emeral-500-color;
    line-height: 2.75rem;
}
.nuxt-content p{
    @apply text-sm font-medium text-gray-500 my-1;
}
.nuxt-content blockquote{
    @apply border-r-4 border-green-600 bg-green-100 my-2;
}
.nuxt-content blockquote p{
    @apply pr-3 text-gray-500 py-2 text-sm md:text-base lg:text-lg font-medium;
}
.nuxt-content strong{
    @apply font-bold bg-gray-200 p-1 text-sm md:text-base lg:text-lg rounded-md;
}
</style>



