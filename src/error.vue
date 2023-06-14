<script setup lang="ts">
const props = defineProps({
  error: {
    type: Object,
    default: null
  }
})

const handleError = () => {
  window.console.clear()
  clearError({ redirect: '/' })
}

useHead({
  title: `Error ${props.error.statusCode}`,
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg'
    }
  ]
})
</script>

<template>
  <Body
    class="prose max-w-full dark:prose-invert prose-a:no-underline prose-img:my-0 dark:bg-slate-900"
  >
    <NuxtLayout>
      <main class="mx-auto mt-8 max-w-5xl text-center">
        <h1>
          Error
          {{ props.error.statusCode }}
        </h1>
        <h2>{{ props.error.message }}</h2>
        <button class="rounded border px-6 py-1" @click="handleError">
          Ir a página de inicio
        </button>
      </main>
    </NuxtLayout>
  </Body>
</template>
