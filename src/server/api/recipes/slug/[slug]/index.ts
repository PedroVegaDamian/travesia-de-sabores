import type { StoryResponse } from '~/types/Recipes'

const config = useRuntimeConfig()

export default defineEventHandler(async event => {
  return await $fetch<StoryResponse>(
    `${config.apiUrl}/${event.context.params?.slug}`,
    {
      query: {
        token: config.token,
        version: config.version
      }
    }
  )
})
