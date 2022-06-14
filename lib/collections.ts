import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { getComponentBySlug } from './components'

const collectionsDirectory = join(process.cwd(), '/data/collections')

export function getCollectionSlugs() {
  return fs.readdirSync(collectionsDirectory)
}

export function getCollectionBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(collectionsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data } = matter(fileContents)

  type Items = {
    [key: string]: string | number
  }

  const items: Items = {}

  fields.forEach((field) => {
    if (field === 'components') {
      items['children'] = data.components.map((component) =>
        getComponentBySlug(component, [
          'title',
          'slug',
          'ecommerce',
          'emoji',
          'count',
          'tags',
        ])
      )
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function collectionSlugs() {
  let slugs = getCollectionSlugs().map((slug) => slug.replace(/\.mdx$/, ''))

  console.log(slugs)

  return slugs.map((slug) => {
    return {
      params: {
        slug,
      },
    }
  })
}

export function getCollections(fields: string[] = []) {
  const slugs = getCollectionSlugs()
  const collections = slugs.map((slug) => getCollectionBySlug(slug, fields))

  return collections
}
