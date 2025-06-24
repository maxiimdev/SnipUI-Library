<!-- pages/components/text/typing.vue -->
<script lang="ts" setup>
definePageMeta({
  layout: 'sidebar',
});

const copyCode = () => {
  navigator.clipboard.writeText('<TypingText content="Hello, world!" :speed="50" />');
  alert('Code copied!');
};
</script>

<template>
  <div>
    <h2>Typing Effect Demo</h2>
    
    <div class="space-y-6">
      <div>
        <h3>Slow Typing (speed: 100ms)</h3>
        <TypingText content="Hello, slow world!" :speed="100" />
      </div>

      <div>
        <h3>Fast Typing (speed: 50ms)</h3>
        <TypingText content="Hello, fast world!" :speed="50" />
      </div>
    </div>

    <pre class="bg-gray-100 p-4 mt-4 rounded"><code><TypingText content="Hello, world!" :speed="50" /></code></pre>
    
    <button
      class="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 transition-colors"
      @click="copyCode"
    >
      Copy Code
    </button>
  </div>
</template>