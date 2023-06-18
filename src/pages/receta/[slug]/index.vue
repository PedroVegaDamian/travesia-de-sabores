<script setup lang="ts">
import { StoryResponse } from '~/types/Recipes'

const route = useRoute('receta-slug')

const { data } = await useFetch<StoryResponse>(
  `/api/recipes/slug/${route.params.slug}`
)

useHead({
  title: data?.value?.story.name || ''
})
</script>

<template>
  <h1>{{ data?.story.content.title }}</h1>
  <p style="white-space: pre-wrap">
    {{ data?.story.content.description }}
  </p>
  <NuxtImg
    :src="data?.story.content.image.filename"
    :alt="data?.story.content.image.alt"
    :width="640"
    :height="360"
  />
  <h2>Ingredientes:</h2>
  <ul>
    <li
      v-for="(ingredient, index) in data?.story.content.ingredients.items"
      :key="index"
    >
      {{ ingredient }}
    </li>
  </ul>
  <h2>Preparación:</h2>
  <ol>
    <li
      v-for="(step, index) in data?.story.content.procedure.items"
      :key="index"
    >
      {{ step }}
    </li>
  </ol>
</template>
