import type { StoriesResponse } from '~/types/Recipes'

const config = useRuntimeConfig()

export default defineEventHandler(async event => {
  const queryEvent = getQuery(event)
  let query: Record<string, string | undefined> = {
    token: config.token,
    version: config.version,
    with_tag: event.context.params?.category
  }

  if (queryEvent.term) {
    query = { ...query, 'filter_query[title][like]': `*${queryEvent.term}*` }
  }

  return await $fetch<StoriesResponse>(config.apiUrl, { query })
})
