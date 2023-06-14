import { StoriesResponse } from '~/types/Recipes'

const config = useRuntimeConfig()

export default defineEventHandler(async () => {
  return await $fetch<StoriesResponse>(config.apiUrl, {
    query: {
      token: config.token,
      version: config.version
    }
  })
})
