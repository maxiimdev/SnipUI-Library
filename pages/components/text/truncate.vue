<!-- pages/components/text/truncate.vue -->
<script lang="ts" setup>
definePageMeta({
  layout: 'sidebar',
});
</script>

<template>
  <div class="ml-[18rem] p-8">
    <h2>Truncated Text Demo</h2>
    <div class="space-y-6">
      <div>
        <h3>Short Text (max-length: 20)</h3>
        <TruncatedText :max-length="20">
          This is a short example text to demonstrate truncation.
        </TruncatedText>
      </div>
      <div>
        <h3>Long Text (max-length: 50)</h3>
        <TruncatedText :max-length="50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </TruncatedText>
      </div>
    </div>
    <pre class="bg-gray-100 p-4 mt-4 rounded"><code><TruncatedText :max-length="50">Long text here...</TruncatedText></code></pre>
    <button
      class="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
      @click="copyCode"
    >
      Copy Code
    </button>

    <span class='bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 animate-gradient-pulse text-transparent bg-clip-text font-bold text-5xl'>Sunset Text</span>
  </div>
</template>

<script lang="ts">
const copyCode = () => {
  navigator.clipboard.writeText('<TruncatedText :max-length="50">Long text here...</TruncatedText>');
  alert('Code copied!');
};
</script>