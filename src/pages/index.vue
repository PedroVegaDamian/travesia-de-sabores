<script setup lang="ts">
import { StoriesResponse } from '~/types/Recipes'

useHead({
  title: 'Inicio'
})

const { data } = await useFetch<StoriesResponse>('/api/recipes')
const recipes = useState('recipes', () => data.value)
if (recipes.value) {
  recipes.value = data.value
}
const term = ref('')

const search = async (value: string) => {
  const { data } = await useFetch<StoriesResponse>(`/api/recipes`, {
    query: {
      term: value
    }
  })
  recipes.value = data.value
  term.value = value
}

const handleClick = async () => {
  const { data } = await useFetch<StoriesResponse>('/api/recipes')
  recipes.value = data.value
  term.value = ''
}
</script>

<template>
  <SearcherOfRecipes @on-search="search" />
  <RecipeCategories />

  <div class="flex items-start justify-between max-[400px]:block">
    <h1 class="max-lg:ml-8">Lista de Recetas</h1>
    <span
      v-show="term.length > 0"
      class="relative mr-2 mt-4 inline-block rounded-xl border px-2 text-sm max-[400px]:mb-4 max-[400px]:mt-0"
    >
      Búsqueda por: {{ term }}
      <Icon
        class="absolute -right-2 -top-2 cursor-pointer"
        size="1rem"
        name="clarity:remove-solid"
        @click="handleClick"
      />
    </span>
  </div>
  <RecipeList :data="recipes" />
</template>
