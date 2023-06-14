<script setup lang="ts">
interface Categories {
  slug: string
  icon: string
  name: string
}

const categories: Categories[] = [
  {
    slug: 'arroces',
    icon: 'emojione:cooked-rice',
    name: 'Arroces'
  },
  {
    slug: 'sopas',
    icon: 'twemoji:pot-of-food',
    name: 'Sopas'
  },
  {
    slug: 'entradas',
    icon: 'twemoji:fork-and-knife-with-plate',
    name: 'Entradas'
  }
]
</script>

<template>
  <section class="flex justify-center gap-4">
    <div
      v-for="category in categories"
      :key="category.slug"
      class="text-center"
    >
      <button
        :title="`Botón para filtrar recetas por ${category.name.toLowerCase()}`"
        class="grid h-12 w-12 place-content-center rounded-full border border-secondary border-opacity-20 dark:border-primary dark:border-opacity-25"
        @click="
          navigateTo({
            name: 'categoria-category',
            params: { category: category.slug }
          })
        "
      >
        <Icon :name="category.icon" size="24" />
      </button>
      <p class="mt-2 text-xs">{{ category.name }}</p>
    </div>
  </section>
</template>
