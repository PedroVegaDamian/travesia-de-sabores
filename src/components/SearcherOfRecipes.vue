<script setup lang="ts">
const recipeToSearch = ref('')

const searchRecipe = () => {
  recipeToSearch.value = ''
}
</script>

<template>
  <form
    class="mb-8 flex justify-center text-center"
    @submit.prevent="searchRecipe"
  >
    <button
      type="submit"
      title="Botón de búsqueda"
      class="mr-2 grid h-8 w-8 place-content-center rounded-full bg-secondary dark:bg-primary"
    >
      <Icon
        name="material-symbols:search"
        size="20"
        title="Ícono de una lupa"
        class="text-primary dark:text-secondary"
      />
    </button>
    <input
      v-model.trim="recipeToSearch"
      type="text"
      name="search-recipe"
      placeholder="Por ejemplo: Ceviche"
      title="Cuadro de texto para buscar recetas"
      class="min-w-[240px] rounded border px-3 outline-none dark:text-secondary"
    />
  </form>
</template>
