<script setup lang="ts">
import { ref } from "vue";
const colortext = ref(
    [
        ['Text Primary', 'text-primary text-h5','text-primary text-subtitle-1 mt-1'],
        ['Text Secondary', 'text-secondary text-h5','text-secondary text-subtitle-1 mt-1'],
        ['Text Info', 'text-info text-h5','text-info text-subtitle-1 mt-1'],
        ['Text Warning', 'text-warning text-h5','text-warning text-subtitle-1 mt-1'],
        ['Text Error', 'text-error text-h5','text-error text-subtitle-1 mt-1'],
        ['Text Success', 'text-success text-h5','text-success text-subtitle-1 mt-1'],
    ]
)
</script>
<template>
    <div class="d-flex flex-column gap-1 mx-1 pa-7 pt-0 pb-0">
        <div class="mb-6" v-for="[name1, cls1,cls2] in colortext" :key="name1" >
            <v-card elevation="10" >
                <div class="py-6 px-4">  
                    <h5 :class="[cls1, '']">{{ name1 }} </h5>
                    <div :class="[cls2, '']">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</div>
                 </div>   
            </v-card>
        </div>    
    </div>
</template>
