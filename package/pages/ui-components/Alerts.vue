<script setup lang="ts">
import { ref } from 'vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';

import Basic from '@/components/ui-components/alert/Basic.vue';
import Filled from '@/components/ui-components/alert/Filled.vue';
import Closable from '@/components/ui-components/alert/Closable.vue';

</script>

<template>
    <v-row>
        <v-col cols="12">
            <v-row>
                <!-- Basic -->
                <v-col cols="12">
                    <UiChildCard title="Alert Basic">
                        <Basic />
                    </UiChildCard>
                </v-col>
                <!-- Filled -->
                <v-col cols="12">
                    <UiChildCard title="Alert Filled">
                        <Filled />
                    </UiChildCard>
                </v-col>
                <!-- Closable -->
                <v-col cols="12">
                    <UiChildCard title="Alert Closable">
                        <Closable />
                    </UiChildCard>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>
