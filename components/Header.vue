<script lang="ts" setup></script>

<template>
  <header class="sticky z-100 top-0 main-bg">
    <div class="flex items-center justify-between gap-10 h-20 p-2 w-2/3 mx-auto ">
      <ul class="flex items-center gap-3">
        <RouterLink to="/">
          <Icon name="arcticons:nequi-colombia" size="50" class="" />
        </RouterLink>

        <RouterLink
          to="/docs"
          class="main-div py-2 px-5 cursor-pointer rounded-xl"
          active-class="active-link"
          >Docs</RouterLink
        >
        <RouterLink
          to="/components"
          class="main-div py-2 px-5 cursor-pointer rounded-xl"
          active-class="active-link"
          >Components</RouterLink
        >
      </ul>
      <div class="flex items-center gap-5">
        <div
          class="main-div rounded-xl w-[14rem] h-10 px-5 py-1 flex items-center justify-start"
        >
          <span class="text-[14px] text-[#616161]">Search...</span>
        </div>
        <div
          class="main-div rounded-xl w-10 h-10 flex items-center justify-center pt-2"
        >
          <ThemeToggle />
        </div>
      </div>
    </div>
  </header>
</template>
