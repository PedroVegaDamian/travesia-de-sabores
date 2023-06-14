export default defineNuxtConfig({
  srcDir: 'src',
  runtimeConfig: {
    apiUrl: process.env.NUXT_API_URL,
    token: process.env.NUXT_API_TOKEN,
    version: process.env.NUXT_API_VERSION
  },
  nitro: {
    compressPublicAssets: true
  },
  modules: [
    'nuxt-icon',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge'
  ],
  css: ['@/assets/css/tailwind.css'],
  image: {
    domains: ['https://a-us.storyblok.com/']
  },
  colorMode: {
    classSuffix: ''
  },
  experimental: {
    typedPages: true
  }
})
