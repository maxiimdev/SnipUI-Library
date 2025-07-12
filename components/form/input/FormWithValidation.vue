<script lang="ts" setup>
import { ref, watch } from 'vue'

const username = ref('')
const isFocused = ref(false)
const error = ref('')
const wasSubmitted = ref(false)

const validate = () => {
  if (username.value.length < 2) {
    error.value = 'Username must be at least 2 characters'
    return false
  }
  error.value = ''
  return true
}

const handleSubmit = () => {
  wasSubmitted.value = true
  if (validate()) {
    alert(`Submitted: ${username.value}`)
    username.value = ''
    wasSubmitted.value = false
  }
}

watch(username, () => {
  if (wasSubmitted.value) validate()
})
</script>

<template>
  <ClientOnly>
    <div class="relative md:w-[40rem] h-[31rem] flex justify-center items-center w-[15rem]">
      <div class="main-div rounded-lg shadow-xl w-full max-w-sm p-4">
        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <label
              for="username"
              class="block text-sm font-semibold main-text mb-2 mx-2"
              :class="{ 'text-red-500': error }"
            >
              Username
            </label>

            <input
              id="username"
              v-model="username"
              type="text"
              placeholder="Enter your username"
              class="w-full px-3 py-2 rounded-md border focus:outline-none text-p"
              :class="{
                'border-component': isFocused || username,
                'main-border': !isFocused && !username,
                'border-red-500': error,
              }"
              @focus="isFocused = true"
              @blur="isFocused = false"
            />

            <p class="text-sm text-p mt-2">
              Your username should be unique and at least 2 characters long.
            </p>

            <p v-if="error" class="text-sm text-red-500 mt-1">
              {{ error }}
            </p>
          </div>

          <button
            type="submit"
            class="w-full px-4 py-2 main-text active-component rounded-md main-text main-div"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped>
.absolute {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
