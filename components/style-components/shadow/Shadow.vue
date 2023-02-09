<script setup lang="ts">
import UiParentCard from '@/components/shared/UiParentCard.vue';
</script>
<template>
    <UiParentCard title="Shadow">
        <v-row justify="center" class="mb-5 mt-1 px-8 px-3">
            <v-col v-for="(m, n) in 25" :key="n" cols="6" sm="auto">
                <v-card 
                    :class="['d-flex justify-center align-center bg-primary py-sm-4 py-3 px-sm-8 px-4', `elevation-${n}`]">
                    <div>{{ n }}</div>
                </v-card>
            </v-col>
        </v-row>    
    </UiParentCard>
</template> 
