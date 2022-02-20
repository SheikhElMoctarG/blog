<template>
  <div class="alert-star border-r-4 p-4 mb-4">
      <div class="flex items-start" >
          <div class="flex-shrink-0 self-start pt-1">
              <svg viewBox="0 0 20 20" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" class="h-5 w-5 alert-icon" >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
          </div> 
          <div class="mr-2 overflow-hidden text-sm leading-7 w-full" >
         <p><slot></slot></p>
    </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.alert-star{
    border-color: #b794f4;
    background-color: #faf5ff;
}
.alert-star svg{
    color: #b794f4;
}
</style>