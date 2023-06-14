<script setup lang="ts">
import { useColorTheme } from '~/colorsTheme'

const colorMode = useColorTheme()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <TheHeader />
  <slot />

  <button
    role="button"
    title="Cambiar tema"
    class="fixed bottom-0 right-0 m-4 grid h-10 w-10 place-content-center rounded-full border border-secondary border-opacity-20 dark:border-primary dark:border-opacity-20"
    @click="toggleColorMode"
  >
    <Icon
      v-show="$colorMode.value === 'dark'"
      name="material-symbols:wb-sunny-outline-rounded"
      size="24"
    />
    <Icon
      v-show="colorMode.value === 'light'"
      name="material-symbols:nightlight-outline-rounded"
      size="24"
      class="text-secondary opacity-50"
    />
  </button>
</template>
