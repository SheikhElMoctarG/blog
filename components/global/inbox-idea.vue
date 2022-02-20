<template>
  <div class="alert-idea border-r-4 p-4 mb-4" ><div class="flex items-start" ><div class="flex-shrink-0 self-start pt-1" ><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 alert-icon" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg></div> <div class="mr-2 overflow-hidden text-sm leading-7 w-full" >
<p ><slot></slot></p>
</div></div></div>
</template>

<script>
export default {

}
</script>

<style>
.alert-idea{
    border-color: #48bb78;
    background-color: #f0fff4;
}
.alert-idea svg{
    color: #48bb78;
}
</style>