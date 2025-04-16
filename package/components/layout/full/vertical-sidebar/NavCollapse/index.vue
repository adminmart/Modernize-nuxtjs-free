<script setup>
import Icon from "../Icon.vue";
const props = defineProps({ item: Object, level: Number });
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!---Item Childern -->
  <!-- ---------------------------------------------- -->
  <v-list-group no-action>
    <!-- ---------------------------------------------- -->
    <!---Dropdown  -->
    <!-- ---------------------------------------------- -->
    <template v-slot:activator="{ props }">
      <v-list-item
        v-bind="props"
        :value="item.title"
        rounded
        class="mb-1"
        
      >
        <!---Icon  -->
        <template v-slot:prepend>
          <Icon :item="item.icon" :level="level" />
        </template>
        <!---Title  -->
        <v-list-item-title
          class="mr-auto"
        >{{item.title}}</v-list-item-title>
        <!---If Caption-->
        <v-list-item-subtitle
          v-if="item.subCaption"
          class="text-caption mt-n1 hide-menu"
        >
          {{ item.subCaption }}
        </v-list-item-subtitle>
      </v-list-item>
    </template>
    <!-- ---------------------------------------------- -->
    <!---Sub Item-->
    <!-- ---------------------------------------------- -->
    <template
      v-for="(subitem, i) in item.children"
      :key="i"
      v-if="item.children"
    >
      <LayoutFullVerticalSidebarNavCollapse :item="subitem" v-if="subitem.children" :level="level + 1" />
      <LayoutFullVerticalSidebarNavItem :item="subitem" :level="level + 1" v-else></LayoutFullVerticalSidebarNavItem>
    </template>
  </v-list-group>

  <!-- ---------------------------------------------- -->
  <!---End Item Sub Header -->
  <!-- ---------------------------------------------- -->
</template>
