<script lang="ts" setup></script>

<template>
  <div class="min-h-screen grid grid-rows-[auto_1fr]">
    <Header />
    <main class="">
      <slot />
    </main>
    <Footer />
  </div>
</template>