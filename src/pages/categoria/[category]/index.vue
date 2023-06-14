<script setup lang="ts">
import { StoriesResponse } from '~/types/Recipes'

const route = useRoute('categoria-category')

const { data, pending } = await useFetch<StoriesResponse>(
  `/api/recipes/category/${route.params.category}`
)

useHead({
  title:
    route.params.category.charAt(0).toUpperCase() +
    route.params.category.slice(1)
})
</script>

<template>
  <h1>Recetas de {{ route.params.category }}</h1>

  <h2 v-if="pending">Cargando..</h2>
  <h2 v-else-if="data?.stories.length === 0">No se encontraron recetas</h2>
  <section
    v-else
    class="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8"
  >
    <RecipeCard
      v-for="storie in data?.stories"
      :key="storie.id"
      :recipe="storie"
    />
  </section>
</template>
