import { StoriesResponse } from '~/types/Recipes'

const config = useRuntimeConfig()

export default defineEventHandler(async event => {
  return await $fetch<StoriesResponse>(config.apiUrl, {
    query: {
      token: config.token,
      version: config.version,
      with_tag: event.context.params?.category
    }
  })
})
