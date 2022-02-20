<template>
  <div class="flex justify-between">
      <NuxtLink v-if="prev" 
      :to="prev.slug"
      class="font-medium hover:bg-green-400 hover:text-white flex items-center border-2 rounded p-2 border-gray-200 text-gray-700 text-sm">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 ml-2"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg> <p>{{prev.title}}</p>
      </NuxtLink>
      <span v-else>&nbsp;</span>
      <NuxtLink v-if="next" 
      :to="next.slug"
      class="font-medium hover:bg-green-400 hover:text-white flex items-center border-2 rounded p-2 border-gray-200 text-gray-700 text-sm" dir="ltr">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="mr-2 w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path></svg> <p>{{next.title}}</p>
      </NuxtLink>
      <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
    props: {
        prev: {
            type: Object,
            default: ()=> null
        },
        next: {
            type: Object,
            default: ()=> null
        }
    },
}
</script>

<style>
a{
    max-width: 350px;
}
</style>



