<script setup lang="ts">
import { Icon } from "@iconify/vue";

import icon1 from "/images/technology/vue-cat-icon.svg";
import icon2 from "/images/technology/angular-cat-icon.svg";
import icon3 from "/images/technology/next-cat-icon.svg";
import icon4 from "/images/technology/react-cat-icon.svg";
import icon5 from "/images/technology/nuxt-cat-icon.svg";
import icon6 from "/images/technology/bt-cat-icon.svg";

const items = [
  {
    text: "Templates",
    icon: "window-frame-linear",
    url: "https://adminmart.com/templates/nuxtjs/",
  },
  {
    text: "Help",
    icon: "question-circle-linear",
    url: "https://adminmart.com/support/",
  },
  {
    text: "Hire Us",
    icon: "case-round-linear",
    url: "https://adminmart.com/hire-us/",
  },
];

const preview_link = [
  {
    title: "Nuxtjs Preview",
    img: icon5,
    url: "https://adminmart.com/product/modernize-nuxt-js-admin-dashboard/?ref=56#product-demo-section",
  },

  {
    title: "Angular Preview",
    img: icon2,
    url: "https://adminmart.com/product/modernize-angular-material-dashboard/?ref=56#product-demo-section",
  },
  {
    title: "Nextjs Preview",
    img: icon3,
    url: "https://adminmart.com/product/modernize-tailwind-nextjs-dashboard-template/?ref=56#product-demo-section",
  },
  {
    title: "VueJs Version",
    img: icon1,
    url: "https://adminmart.com/product/modernize-vuetify-vue-admin-dashboard/?ref=56#product-demo-section",
  },
  {
    title: "Reactjs Preview",
    img: icon4,
    url: "https://adminmart.com/product/modernize-react-mui-dashboard-theme/?ref=56#product-demo-section",
  },

  {
    title: "Bootstrap Preview",
    img: icon6,
    url: "https://adminmart.com/product/modernize-bootstrap-5-admin-template/?ref=56#product-demo-section",
  },
];
</script>
<template>
  <div class="feature-topbar w-full py-4 px-6 w-100">
    <div
      class="d-flex flex-lg-row flex-column gap-3 justify-space-between align-center"
    >
      <div class="d-flex align-center ga-6">
        <a href="https://adminmart.com/" target="_blank" class="lh-0">
          <img src="/images/logos/logo-adminmart.svg" width="148"
        /></a>
        <div
          class="d-lg-flex d-none items-center ga-4 topbar-links border-s border-opacity-25 ps-6"
        >
          <a
            v-for="(item, index) in items"
            :key="index"
            class="d-flex items-center p-0 ga-2 lh-normal"
            variant="text"
            :href="item.url"
            target="_blank"
          >
            <Icon :icon="'solar:' + item.icon" height="20" width="20" />
            {{ item.text }}
          </a>
        </div>
      </div>
      <div class="d-flex flex-md-row flex-column align-center ga-4">
        <h5
          class="text-subtitle-1 font-weight-bold text-linear-gradient text-uppercase"
        >
          Checkout Pro Version
        </h5>
        <div
          class="d-flex flex-md-row flex-wrap justify-md-end justify-center ga-3"
        >
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn
                variant="outlined"
                class="border-blue text-surface text-h6 font-weight-medium"
                rounded="md"
                v-bind="props"
              >
                <span class="d-flex ga-2">
                  Live Preview <ChevronDownIcon size="20" />
                </span>
              </v-btn>
            </template>
            <v-list density="compact" elevation="10" class="pa-3">
              <v-list-item
                v-for="(item, index) in preview_link"
                :key="index"
                :value="index"
                :href="item.url"
                target="_blank"
              >
                <v-list-item-title
                  class="d-flex align-center ga-3 text-h6 font-weight-regular"
                >
                  <img :src="item.img" width="18" :alt="item.img" />
                  {{ item.title }}</v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn
            class="text-surface text-h6 font-weight-medium"
            rounded="md"
            color="primary"
            href="https://adminmart.com/product/modernize-nuxt-js-admin-dashboard/?ref=56#product-demo-section"
            target="_blank"
          >
            <span class="d-flex ga-2">
              <Icon icon="solar:crown-linear" height="18" width="18" /> Get
              Pro</span
            >
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
