<template>
      <div class="max-w-sm rounded-lg overflow-hidden shadow-lg" dir="rtl">
      <img class="w-full" :src="require(`~/content/images/${img}`)" alt="Sunset in the mountains">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{title}}</div>
          <p class="text-gray-700 text-base">
            {{description}}
          </p>
        </div>
        <div class="px-6 py-4 flex items-center">
          <img class="w-10 h-10 rounded-full" :src="require(`~/content/images/author/${authorIMG}`)" alt="Sheikh">
          <span class="mr-2">{{ authorNAME }} {{$moment(dateP, 'YYYY-MM-DD').fromNow() }}</span>
        </div>
      </div>
</template>

<script>
export default {
    props: ['img', 'title', 'description', 'authorIMG', 'authorNAME', 'dateP']
}
</script>

<style>

</style>