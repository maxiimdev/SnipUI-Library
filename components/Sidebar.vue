<!-- components/Sidebar.vue -->
<script lang="ts" setup>
const props = defineProps<{
  items: { text: string; path: string }[];
  text: string;
}>();
</script>

<template>
  <div
    class="flex ml-3 flex-col gap-3 px-8 pt-5 w-[15rem] min-h-[85vh] fixed top-1/3 -translate-y-1/3 text-[14px] border-1 border-[#313131] rounded-xl"
  >
    <p class="text-p border-1 rounded-xl p-3 text-center mb-10">
      {{ props.text }}
    </p>
    <div class="flex flex-col gap-5">
      <NuxtLink
        :to="item.path"
        v-for="(item, index) in props.items"
        :key="index"
        class="main-div p-3 rounded-xl text-p cursor-pointer hover:scale-105"
        active-class="bg-[#313131] text-white"
      >
        {{ item.text }}
      </NuxtLink>
    </div>
  </div>
</template>