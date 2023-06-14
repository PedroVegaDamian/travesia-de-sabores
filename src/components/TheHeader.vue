<template>
  <header
    class="h-[80px] border-b border-b-secondary border-opacity-10 dark:border-b-primary dark:border-opacity-10"
  >
    <div class="mx-auto flex h-full max-w-5xl items-center justify-between">
      <NuxtLink
        to="/"
        title="Logo travesía de sabores"
        class="flex h-full items-center"
      >
        <LogoApp />
        <p class="ml-[10px] text-2xl leading-6">
          Travesía <br />
          De Sabores
        </p>
      </NuxtLink>
      <div class="flex gap-5">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/">Recetas</NuxtLink>
      </div>
    </div>
  </header>
</template>
