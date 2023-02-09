<script setup lang="ts">
/*Call Components*/
 import SalesOverview from '@/components/dashboard/SalesOverview.vue';
import YearlyBreakup from '@/components/dashboard/YearlyBreakup.vue';
import MonthlyEarning from '@/components/dashboard/MonthlyEarnings.vue';
import RecentTransaction from '@/components/dashboard/RecentTransaction.vue';
import ProductPerformance from '@/components/dashboard/ProductPerformance.vue';
import ProductCards from '@/components/dashboard/ProductCards.vue';
</script>
<template>
    <v-row>
        <v-col cols="12">
            <v-row>
                <!-- Sales overview -->
                <v-col cols="12" lg="8">
                    <SalesOverview />
                </v-col>
                <!-- Yearly Breakup / Monthly Earnings -->
                <v-col cols="12" lg="4">
                    <div class="mb-6">
                        <YearlyBreakup />
                    </div>
                    <div>
                        <MonthlyEarning />
                    </div>
                </v-col>
                <!-- Recent transaction -->
                <v-col cols="12" lg="4">
                    <RecentTransaction />
                </v-col>
                <!-- Product performence -->
                <v-col cols="12" lg="8">
                    <ProductPerformance />
                </v-col>
                <!-- Product Cards -->
                <v-col cols="12">
                    <ProductCards />
                </v-col>
            </v-row>
        </v-col>
        <v-col class="text-center mt-2">
            <p class="text-muted">Design and Developed by <a flat variant="text" href="https://adminmart.com/" target="_blank" class="pl-1 text-primary">AdminMart.com</a></p>
        </v-col>
    </v-row>
</template>