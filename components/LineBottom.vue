<template>
  <div class="text-center my-2">
      <span class="font-bold">{{text}}</span>
      <div class="flex justify-center items-center"><p class="w-20 h-1 bg-emeral-500-color rounded-md"></p></div>
  </div>
</template>

<script>
export default {
    props:{
        text:{
            type: String,
            default: "Hi"
        }
    }
}
</script>

<style>

</style>