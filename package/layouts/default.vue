<script setup lang="ts">
import Topbar from "~/components/layout/full/Topbar.vue";

const title = ref(
  "Modernize - Nuxt3 Typescript based Free Admin Dashboard Template"
);
useHead({
  meta: [{ content: title }],
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - Nuxt3 Typescript based Free Admin Dashboard Template`
      : "Modernize - Nuxt3 Typescript based Free Admin Dashboard Template";
  },
});
</script>

<template>
  <v-locale-provider>
    <Topbar />
    <v-app>
      <LayoutFullMain />
      <v-main>
        <v-container fluid class="page-wrapper">
          <div class="maxWidth">
            <NuxtPage />
          </div>
        </v-container>
      </v-main>
    </v-app>
  </v-locale-provider>
</template>
