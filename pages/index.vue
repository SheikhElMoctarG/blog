<template>
  <div>
    <line-bottom text="احدث المقالات"/>
    <div class="flex justify-center items-center">
    <div class="md:grid grid-cols-2 block" dir="rtl">
    <div v-for="article in articles" :key="article.slug" class="md:mx-4 m-2">
      <NuxtLink :to="article.slug"><post-card :title="article.title" :description="article.description" :img="article.img" :authorNAME="article.author.name" :dateP="article.createdAt" :authorIMG="article.author.image"/></NuxtLink>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
import LineBottom from '../components/LineBottom.vue';
import postCard from '../components/postCard.vue';
export default {
  name: 'IndexPage',
  layout: 'homepage',
  async asyncData({$content, params}){
    const articles = await $content("articles")
                            .only(['title', 'description', 'img', 'slug', 'author', 'createdAt'])
                            .sortBy('createdAt', 'asc').fetch();
    return {articles}
  },
  components: {
    LineBottom,
    postCard
  },
  head: {
    title: 'الرئيسية',
    meta: [
    { property: "og:site_name", content: "تدويناتي" },
    { hid: "og:type", property: "og:type", content: "website" },
    {
      hid: "og:url",
      property: "og:url",
      content: "https://sheikhelmoctarg.github.io/blog/",
    },
    {
      hid: "og:title",
      property: "og:title",
      content: "الرئسية",
    },
    {
      hid: "og:description",
      property: "og:description",
      content: "مدونة تقنية عربية تقدم مقالات ذات جودة عالية وتسعى لتبسيط التقنيات على الشاب العربي",
    },
    {
      hid: "og:image",
      property: "og:image",
      content: "https://j.top4top.io/p_22408ulg51.png",
    },
    { property: "og:image:width", content: "740" },
    { property: "og:image:height", content: "300" },
    ]
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Cairo&display=swap');
body{
  font-family: 'Cairo', sans-serif;
}
</style>
