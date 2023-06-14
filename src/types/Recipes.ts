export interface Ingredients {
  _uid: string
  items: string[]
  plugin: string
}

export interface MetaData {}

export interface Image {
  id: number
  alt: string
  name: string
  focus: string
  title: string
  source: string
  filename: string
  copyright: string
  fieldtype: string
  meta_data: MetaData
  is_external_url: boolean
}

export interface Content {
  _uid: string
  image: Image
  title: string
  component: string
  procedure: Ingredients
  description: string
  ingredients: Ingredients
}

export interface Story {
  name: string
  created_at: string
  published_at: string
  id: number
  uuid: string
  content: Content
  slug: string
  full_slug: string
  sort_by_date: null
  position: number
  tag_list: string[]
  is_startpage: boolean
  parent_id: null
  meta_data: null
  group_id: string
  first_published_at: string
  release_id: null
  lang: string
  path: null
  alternates: any[]
  default_full_slug: null
  translated_slugs: null
}

export interface StoriesResponse {
  stories: Story[]
  cv: number
  rels: any[]
  links: any[]
}

export interface StoryResponse {
  story: Story
  cv: number
  rels: any[]
  links: any[]
}
