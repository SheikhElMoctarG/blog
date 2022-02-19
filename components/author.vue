<template>
  <div class="shadow-md rounded-lg w-80 p-2 my-2">
      <!-- image -->
      <div class="flex justify-center items-center mt-1">
          <img :src="require(`~/content/images/author/${author.image}`)" :alt="author.name" class="w-20 h-20 rounded-full">
      </div>
      <div class="text-center mt-2">
          <h1 class="font-semibold text-xl text-gray-700">{{author.name}}</h1>
          <div class="flex justify-center items-center mt-2">
              <h4 class="text-sm px-2 bg-green-600 rounded-full text-white">{{author.job}}</h4>
          </div>
          <p class="text-gray-500 text-sm my-2">{{author.bio}}</p>
          <div class="text-lg text-gray-700 flex justify-center items-center">
              <a :href="author.fb" class="m-2"><img :src="require(`~/assets/icons/facebook.svg`)" class="w-5 h-5 mx-1"></a>
              <a :href="author.qu" class="m-2"><img :src="require(`~/assets/icons/quora.svg`)" class="w-5 h-5 mx-1"></a>
              <a :href="author.tw" class="m-2"><img :src="require(`~/assets/icons/twitter.svg`)" class="w-5 h-5 mx-1"></a>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        author:{
            type: Object,
            default: ()=> null
        }
    }
}
</script>

<style>

</style>