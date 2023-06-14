<script setup lang="ts">
useHead({
  titleTemplate(title) {
    return title ? `${title} - Travesía de Sabores` : 'Travesía de Sabores'
  },
  htmlAttrs: {
    lang: 'es'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg'
    }
  ]
})

useSeoMeta({
  description: 'Travesía de Sabores | Recetas de comida peruana'
})
</script>

<template>
  <Body
    class="prose max-w-full dark:prose-invert prose-a:no-underline prose-img:my-0 dark:bg-slate-900"
  >
    <NuxtLayout>
      <main class="mx-auto mt-8 max-w-5xl">
        <NuxtPage />
      </main>
    </NuxtLayout>
  </Body>
</template>
