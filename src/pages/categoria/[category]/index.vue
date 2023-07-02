<script setup lang="ts">
import { StoriesResponse } from '~/types/Recipes'

const route = useRoute('categoria-category')

useHead({
  title:
    route.params.category.charAt(0).toUpperCase() +
    route.params.category.slice(1)
})

const { data, pending } = await useFetch<StoriesResponse>(
  `/api/recipes/category/${route.params.category}`
)
const recipes = useState('recipesByCategory', () => data.value)
if (recipes.value) {
  recipes.value = data.value
}
const term = ref('')

const search = async (value: string) => {
  const { data } = await useFetch<StoriesResponse>(
    `/api/recipes/category/${route.params.category}`,
    {
      query: {
        term: value
      }
    }
  )
  recipes.value = data.value
  term.value = value
}

const handleClick = async () => {
  const { data } = await useFetch<StoriesResponse>(
    `/api/recipes/category/${route.params.category}`
  )
  recipes.value = data.value
  term.value = ''
}
</script>

<template>
  <SearcherOfRecipes @on-search="search" />

  <div class="flex items-start justify-between max-[400px]:block">
    <h1 class="max-lg:ml-8">Recetas de {{ route.params.category }}</h1>
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

  <h2 v-if="pending">Cargando..</h2>
  <h2 v-else-if="recipes?.stories.length === 0">No se encontraron recetas</h2>
  <RecipeList v-else :data="recipes" />
</template>
