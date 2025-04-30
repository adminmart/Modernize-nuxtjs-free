<script setup lang="ts">
import proimg2 from '/images/blog/blog-img4.jpg';
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Media -->
  <!-- ----------------------------------------------------------------------------- -->

  <v-card  elevation="0">
    <v-img
      class="align-end text-white"
      height="200"
      :src='proimg2'
      cover
    >
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4"> Number 10 </v-card-subtitle>

    <v-card-text>
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange"> Share </v-btn>

      <v-btn color="orange"> Explore </v-btn>
    </v-card-actions>
  </v-card>
</template>
