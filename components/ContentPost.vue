<template>
  <div class="my-4">
      <h1 id="myh1" class="font-semibold text-base text-gray-400 mx-1 border-gray-100">محتوى المقال</h1>
      <div v-for="hendling in toc"  :key="hendling.id" class="text-base text-gray-400 border-green-400 hover:text-green-700 border-r-4 my-1">
          <a :href="`${slug}#${hendling.id}`" class="mr-2">{{ hendling.text }}</a>
      </div>
      <p>{{toc.text}}</p>
  </div>
</template>

<script>
export default {
    props: {
        toc:{
            type: Array,
            default: ()=> null
        },
        slug: {
            type:String,
            default: ()=> null
        }
    }
}
</script>

<style>
#myh1{
   border-bottom-width: 1px;
}

</style>