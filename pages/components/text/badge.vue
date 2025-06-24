<!-- pages/components/text/badge.vue -->
<script lang="ts" setup>
definePageMeta({
  layout: 'sidebar',
});

const copyCode = () => {
  navigator.clipboard.writeText('<TextWithBadge badge="New" badge-color="green">New Feature!</TextWithBadge>');
  alert('Code copied!');
};
</script>

<template>
  <div class="">
    <h2 class="text-2xl font-bold mb-6">Text with Badge Demo</h2>
    <div class="space-y-4">
      <div>
        <TextWithBadge badge="New" badge-color="green">New Feature!</TextWithBadge>
      </div>
      <div>
        <TextWithBadge badge="Beta" badge-color="blue">Beta Version</TextWithBadge>
      </div>
      <div>
        <TextWithBadge badge="Pro" badge-color="red">Pro Edition</TextWithBadge>
      </div>
    </div>
    <pre class="bg-gray-100 p-4 mt-4 rounded"><code><TextWithBadge badge="New" badge-color="green">New Feature!</TextWithBadge></code></pre>
    <button
      class="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
      @click="copyCode"
    >
      Copy Code
    </button>
  </div>
</template>