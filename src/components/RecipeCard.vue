<script setup lang="ts">
import type { Story } from '~/types/Recipes'

interface Props {
  recipe: Story
}

const props = defineProps<Props>()
</script>

<template>
  <article class="overflow-hidden rounded border">
    <NuxtLink
      :to="{
        name: 'receta-slug',
        params: { slug: props.recipe.slug }
      }"
    >
      <header>
        <NuxtImg
          :alt="props.recipe.content.image.alt"
          :src="props.recipe.content.image.filename"
          width="640"
          height="360"
          format="webp"
        />
      </header>
      <div class="overflow-hidden p-4">
        <p class="mb-2 mt-0 text-xl">
          {{ props.recipe.content.title }}
        </p>
        <p
          class="custom my-0 overflow-hidden whitespace-pre-wrap leading-normal opacity-60"
        >
          {{ props.recipe.content.description }}
        </p>
      </div>
    </NuxtLink>
  </article>
</template>

<style scoped>
.custom {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
