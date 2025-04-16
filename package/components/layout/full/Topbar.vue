<script setup lang="ts">
import {
  BriefcaseIcon,
  ChevronDownIcon,
  DeviceLaptopIcon,
  GiftIcon,
  LifebuoyIcon,
  ShoppingCartIcon,
  WindowMaximizeIcon,
} from "vue-tabler-icons";

const items = [
  {
    text: "Support",
    icon: LifebuoyIcon,
    url: "https://adminmart.com/support/",
  },
  { text: "Templates", icon: GiftIcon, url: "https://adminmart.com/" },
  {
    text: "Hire Us",
    icon: BriefcaseIcon,
    url: "https://adminmart.com/hire-us/",
  },
];

const preview_link = [
  {
    title: "Nuxtjs Preview",
    url: "https://adminmart.com/product/modernize-nuxt-js-admin-dashboard/?ref=56#product-demo-section",
  },
  {
    title: "Bootstrap Preview",
    url: "https://adminmart.com/product/modernize-bootstrap-5-admin-template/?ref=56#product-demo-section",
  },
  {
    title: "Angular Preview",
    url: "https://adminmart.com/product/modernize-angular-material-dashboard/?ref=56#product-demo-section",
  },
  {
    title: "Vuejs Preview",
    url: "https://adminmart.com/product/modernize-vuetify-vue-admin-dashboard/?ref=56#product-demo-section",
  },
  {
    title: "Reactjs Preview",
    url: "https://adminmart.com/product/modernize-react-mui-dashboard-theme/?ref=56#product-demo-section",
  },
  {
    title: "Nextjs Preview",
    url: "https://adminmart.com/product/modernize-tailwind-nextjs-dashboard-template/?ref=56#product-demo-section",
  },
];

const buy_link = [
  {
    title: "Buy Nuxtjs Version",
    url: "https://adminmart.com/product/modernize-nuxt-js-admin-dashboard/?ref=56#product-price-section",
  },
  {
    title: "Buy Bootstrap Version",
    url: "https://adminmart.com/product/modernize-bootstrap-5-admin-template/?ref=56#product-price-section",
  },
  {
    title: "Buy Angular Version",
    url: "https://adminmart.com/product/modernize-angular-material-dashboard/?ref=56#product-price-section",
  },
  {
    title: "Buy Vuejs Version",
    url: "https://adminmart.com/product/modernize-vuetify-vue-admin-dashboard/?ref=56#product-price-section",
  },
  {
    title: "Buy Reactjs Version",
    url: "https://adminmart.com/product/modernize-react-mui-dashboard-theme/?ref=56#product-price-section",
  },
  {
    title: "Buy Nextjs Version",
    url: "https://adminmart.com/product/modernize-tailwind-nextjs-dashboard-template/?ref=56#product-price-section",
  },
];
</script>
<template>
  <div class="feature-topbar w-full pa-4 bg-textSecondary w-100">
    <div
      class="d-flex flex-lg-row flex-column gap-3 justify-space-between align-center"
    >
      <div class="d-flex align-center ga-10">
        <a href="https://adminmart.com/" target="_blank">
          <img src="/images/logos/logo-adminmart.svg"
        /></a>
        <div class="d-lg-flex d-none items-center ga-3 topbar-links">
          <v-btn
            v-for="(item, index) in items"
            :key="index"
            class="d-flex items-center"
            variant="text"
            :href="item.url"
            target="_blank"
          >
            <component :is="item.icon" size="20" />
            <span class="ps-1">{{ item.text }}</span>
          </v-btn>
        </div>
      </div>
      <div class="d-flex flex-md-row flex-column align-center ga-4">
        <h5 class="text-h5">Check Modernize Premium Version</h5>
        <div class="d-flex ga-md-4 ga-2">
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn variant="outlined" v-bind="props">
                <span class="d-flex gap-2">
                  <DeviceLaptopIcon size="20" /> Live Preview
                  <ChevronDownIcon size="20" />
                </span>
              </v-btn>
            </template>
            <v-list density="compact" elevation="10">
              <v-list-item
                v-for="(item, index) in preview_link"
                :key="index"
                :value="index"
                :href="item.url"
                target="_blank"
              >
                <v-list-item-title
                  class="d-flex align-center gap-2 text-subtitle-1"
                >
                  <WindowMaximizeIcon size="18" />
                  {{ item.title }}</v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn color="primary" v-bind="props">
                <span class="d-flex gap-2">
                  <ShoppingCartIcon size="20" /> Buy Now
                  <ChevronDownIcon size="20" />
                </span>
              </v-btn>
            </template>
            <v-list density="compact" elevation="10">
              <v-list-item
                v-for="(item, index) in buy_link"
                :key="index"
                :value="index"
                :href="item.url"
                target="_blank"
              >
                <v-list-item-title
                  class="d-flex align-center gap-2 text-subtitle-1"
                >
                  <WindowMaximizeIcon size="18" />
                  {{ item.title }}</v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </div>
  </div>
</template>
