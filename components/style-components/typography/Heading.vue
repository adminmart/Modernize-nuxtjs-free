<script setup lang="ts">
import { ref } from "vue";
const headings = ref([
    ['h1.Heading', 'text-h1', 'font size: 30 | line-height: 45 | font weight: 500'],
    ['h2.Heading', 'text-h2', 'font size: 24 | line-height: 36 | font weight: 500'],
    ['h3.Heading', 'text-h3', 'font size: 21 | line-height: 31.5 | font weight: 500'],
    ['h4.Heading', 'text-h4', 'font size: 18 | line-height: 27 | font weight: 500'],
    ['h5.Heading', 'text-h5', 'font size: 16 | line-height: 24 | font weight: 500'],
    ['h6.Heading', 'text-h6', 'font size: 14 | line-height: 21 | font weight: 500'],
]);

const subtext = ref(
    [
        ['Subtitle 1.', 'text-subtitle-1', ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur', 'font size: 16 | line-height: 28 | font weight: 400'],
        ['Subtitle 2.', 'text-subtitle-2', ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur', 'font size: 14 | line-height: 21 | font weight: 400'],
        ['Body 1.', 'text-body-1', ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur', 'font size: 16 | line-height: 24 | font weight: 400'],
        ['Body 2.', 'text-body-2', ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur', 'font size: 14 | line-height: 20 | font weight: 400'],
        ['Caption.', 'text-caption', ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur', 'font size: 12 | line-height: 19 | font weight: 400'],
        ['OVERLINE.', 'text-overline letter-spacing-0', ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur', 'font size: 12 | line-height: 31 | font weight: 400']
    ]
)
</script>
<template>
    <div class="d-flex flex-column gap-1 mx-1 pa-7 pt-0 pb-0">
        <div class="mb-6" v-for="[name, cls, val] in headings" :key="name">
            <v-card elevation="10">
                <div class="py-6 px-4">
                    <div :class="[cls, '']">{{ name }}</div>
                    <div class="text-body-1">
                        <div class="text-muted">{{ val }}</div>
                    </div>
                </div>
            </v-card>
        </div>
    </div>

    <div class="d-flex flex-column gap-1 mx-1 pt-0 pa-7 pb-0">
        <div class="mb-6" v-for="[name1, cls1, val1, prop] in subtext" :key="name1">
            <v-card elevation="10">
                <div class="py-6 px-4">
                    <div :class="[cls1, '']">{{ name1 }} <span>{{ val1 }}</span></div>
                    <div class="text-body-1 ">
                        <div class="text-muted">{{ prop }}</div>
                    </div>
                </div>
            </v-card>
        </div>
    </div>
</template>
