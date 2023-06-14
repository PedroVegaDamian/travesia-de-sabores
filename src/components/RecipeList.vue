<script setup lang="ts">
import { StoriesResponse } from '~/types/Recipes'

const { data } = useFetch<StoriesResponse>('/api/recipes')
</script>

<template>
  <section class="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8">
    <RecipeCard
      v-for="storie in data?.stories"
      :key="storie.id"
      :recipe="storie"
    />
  </section>
</template>
