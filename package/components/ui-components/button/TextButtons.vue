<script setup lang="ts">
import { ref } from 'vue';
// buttons color data
const btnsColor = ref(['primary', 'secondary', 'success', 'error', 'warning']);
</script>
<template>
    <div class="d-flex flex-wrap gap-3 my-2 align-center flex-column flex-wrap flex-xl-nowrap flex-sm-row fill-height">
        <v-btn v-for="btn in btnsColor" :key="btn" :color="btn" variant="text">
            {{ btn }}
        </v-btn>
    </div>
</template>
