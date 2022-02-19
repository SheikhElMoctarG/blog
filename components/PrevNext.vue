<template>
  <div class="flex justify-between">
      <NuxtLink v-if="prev" 
      :to="prev.slug"
      class="font-medium hover:bg-green-400 hover:text-white flex items-center border-2 rounded p-2 border-gray-200 text-gray-700 text-sm">
        <img :src="require(`~/assets/icons/angles-right.svg`)" class="w-4 h-4 mx-1"> <p>{{prev.title}}</p>
      </NuxtLink>
      <span v-else>&nbsp;</span>
      <NuxtLink v-if="next" 
      :to="next.slug"
      class="font-medium hover:bg-green-400 hover:text-white flex items-center border-2 rounded p-2 border-gray-200 text-gray-700 text-sm" dir="ltr">
        <img :src="require(`~/assets/icons/angles-left.svg`)" class="w-4 h-4 mx-1"> <p>{{next.title}}</p>
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



