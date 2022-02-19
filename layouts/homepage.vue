<template>
  <div>
      <nav-bar/>
      <!-- <main class="lg:block relative mx-4"> -->
        <Nuxt class="container blog-container overflow-hidden mx-auto pt-4 px-8 pb-8"/>
      <!-- </main> -->
      <my-footer/>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import MyFooter from '../components/MyFooter.vue';
export default {
    components: {
        NavBar,
        MyFooter
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cairo&display=swap');
body{
  font-family: 'Cairo', sans-serif;
}
.container {
    width: 100%;
}

@media (min-width: 640px) {
    .container {
        max-width: 640px;
    }
}

@media (min-width: 768px) {
    .container {
        max-width: 768px;
    }
}

@media (min-width: 1024px) {
    .container {
        max-width: 54rem;
    }
}

@media (min-width: 1280px) {
    .container {
        max-width: 58rem;
    }
}

@media (min-width: 1536px) {
    .container {
        max-width: 1536px;
    }
}

</style>