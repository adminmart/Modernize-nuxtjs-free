<script setup lang="ts">
import { ref } from 'vue';
// buttons color data
const btnsColor = ref(['primary', 'secondary', 'error', 'warning','success']);
</script>
<template>
    <div class="d-flex gap-3 align-center flex-column flex-wrap flex-xl-nowrap flex-sm-row fill-height">
        <v-btn v-for="btn in btnsColor" :key="btn" :color="btn" variant="flat">
            {{ btn }}
        </v-btn>
    </div>
</template>
