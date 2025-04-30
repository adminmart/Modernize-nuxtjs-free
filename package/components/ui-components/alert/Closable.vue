<script setup lang="ts">
import { ref } from 'vue';
const alert = ref(true);
</script>
<template>
   <div>
    <v-alert
      v-model="alert"
      border="start"
      variant="tonal"
      closable
      close-label="Close Alert"
      color="primary"
      title="Closable Alert"
    >
      Aenean imperdiet. Quisque id odio. Cras dapibus. Pellentesque ut neque. Cras dapibus.

      Vivamus consectetuer hendrerit lacus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non
    </v-alert>
    <div
      v-if="!alert"
    >
      <v-btn
        color="primary"
        @click="alert = true" flat>
        Reset
      </v-btn>
    </div>
  </div>
</template>
