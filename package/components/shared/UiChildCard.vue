<script setup lang="ts">
const props = defineProps({
    title: String
});
</script>

<template>
    <v-card elevation="10">
        <v-card-item class="py-3">
            <v-card-title class="text-h5">{{ title }}</v-card-title>
        </v-card-item>
        <v-divider />
        <v-card-text>
            <slot />
        </v-card-text>
    </v-card>
</template>
