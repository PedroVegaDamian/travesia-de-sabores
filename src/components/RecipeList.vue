<script setup lang="ts">
import { StoriesResponse } from '~/types/Recipes'

interface Props {
  data: StoriesResponse | null
}

const props = defineProps<Props>()
</script>

<template>
  <section class="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8">
    <RecipeCard
      v-for="storie in props.data?.stories"
      :key="storie.id"
      :recipe="storie"
    />
  </section>
</template>
