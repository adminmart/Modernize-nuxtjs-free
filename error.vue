<script setup lang="ts">
// Page title
const title = ref("404-Page Not Found");
useHead({
  meta: [{ content: title }],
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - 404-Page Not Found`
      : "Modernize - Nuxt3 Typescript based Free Admin Dashboard Template";
  },
});
</script>
<template>
  <div class="d-flex justify-center align-center text-center h-100vh">
      <div>
          <img src="/images/background/errorimg.svg" width="500" alt="404" />
          <h1 class="text-h1 pt-3">Opps!!!</h1>
          <h4 class="text-h4 my-8">This page you are looking for could not be found.</h4>
          <v-btn flat color="primary" class="mb-4" to="/">Go Back to Home</v-btn>
      </div>    
  </div>
</template>
