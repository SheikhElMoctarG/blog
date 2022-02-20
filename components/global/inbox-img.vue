<template>
  <div>
      <img :src="require(`~/content/images/${src}`)" :alt="alt" class="border-4 border-gray-50 rounded-xl mx-4 my-2">
  </div>
</template>

<script>
export default {
    props: ['src','alt']

}
</script>

<style>

</style>