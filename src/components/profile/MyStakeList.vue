<template>
  <div class="w-full flex flex-col gap-4 relative h-full">
    <div class="flex flex-col gap-3 w-full">
      <div class="w-full flex items-center justify-between">
        <h1 class="text-xl md:text-2xl font-bold">My Stakes</h1>
        <y-dropdown left>
          <y-dropdown-item>
            <h1 class="text-GREY-1">Sort by</h1>
          </y-dropdown-item>
          <hr class="border-BORDER" />
          <y-dropdown-item
            @click="sortStakes('project', 'a_z')"
            :prefix="selectionSort == 'project' ? 'yi yi-check' : ''"
            >Project</y-dropdown-item
          >
          <y-dropdown-item
            @click="sortStakes('stake_date', 'newest_oldest')"
            :prefix="selectionSort == 'stake_date' ? 'yi yi-check' : ''"
            >Stake Date</y-dropdown-item
          >
          <y-dropdown-item>
            <h1 class="text-GREY-1">Order by</h1>
          </y-dropdown-item>
          <hr class="border-BORDER" />
          <y-dropdown-item
            v-if="selectionSort == 'stake_date'"
            @click="sortStakes(selectionSort, 'oldest_newest')"
            :prefix="selectionOrderBy == 'oldest_newest' ? 'yi yi-check' : ''"
            >Oldest to newest</y-dropdown-item
          >
          <y-dropdown-item
            v-if="selectionSort == 'stake_date'"
            @click="sortStakes(selectionSort, 'newest_oldest')"
            :prefix="selectionOrderBy == 'newest_oldest' ? 'yi yi-check' : ''"
            >Newest to oldest
          </y-dropdown-item>
          <y-dropdown-item
            v-if="selectionSort == 'project'"
            @click="sortStakes('project', 'a_z')"
            :prefix="selectionOrderBy == 'a_z' ? 'yi yi-check' : ''"
            >A-Z
          </y-dropdown-item>
          <y-dropdown-item
            v-if="selectionSort == 'project'"
            @click="sortStakes('project', 'z_a')"
            :prefix="selectionOrderBy == 'z_a' ? 'yi yi-check' : ''"
            >Z-A
          </y-dropdown-item>
          <template #activator="{ open }">
            <button @click="open" class="subtitle-4 text-BLACK-2 flex items-center gap-2">
              <h1 class="subtitle-4 text-GREY-1">Sort by:</h1>
              <span>{{ selectionSort === 'project' ? 'Project' : 'Stake Date' }}</span>
              <y-icon name="yi yi-arrow-down text-xs" />
            </button>
          </template>
        </y-dropdown>
      </div>
      <div class="w-full h-px bg-BORDER"></div>
    </div>

    <StakeSection v-for="i in 3" :key="i"></StakeSection>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import StakeSection from '@/components/profile/StakeSection.vue';

const selectionSort = ref('project');
const selectionOrderBy = ref('a_z');

function sortStakes(sort, order) {
  selectionSort.value = sort;
  selectionOrderBy.value = order;
}
</script>
