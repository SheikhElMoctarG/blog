<template>
  <div class="alert-info border-r-4 p-4 mb-4 " ><div class="flex items-start" ><div class="flex-shrink-0 self-start pt-1" ><svg fill="currentColor" viewBox="0 0 20 20" class="h-5 w-5 alert-icon" ><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg></div> <div class="mr-2 overflow-hidden alert-content text-sm leading-7 w-full">
<p ><slot></slot></p>
</div></div></div>
</template>

<script>
export default {

}
</script>

<style>
.alert-info{
    border-color: #60a5fa;
    background-color: #eff6ff;
}
.alert-info svg{
    color: #60a5fa;
}
</style>