import type { NextPage } from 'next'

import { ComponentCard } from '../interface/component'
import { Collection } from '../interface/collection'

import { getCollections } from '../lib/collections'

import Banner from '../components/content/banner'
import Card from '../components/collection/card'

export async function getStaticProps() {
  const marketingCollections = getCollections(['title', 'components'])

  return {
    props: {
      marketingCollections,
    },
  }
}

type Props = {
  marketingCollections: Array<Collection>
}

const Home: NextPage<Props> = ({ marketingCollections }) => {
  return (
    <>
      <Banner
        title="HyperUI"
        subtitle="Free Open Source Tailwind CSS Components"
      >
        HyperUI is a collection of free Tailwind CSS components that can be used
        in your next project. With a range of components, you can build your
        next marketing website, admin dashboard, ecommerce store and much more.
      </Banner>

      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-8">
        <div className="space-y-4">
          <h2 className="text-lg font-bold sm:text-xl">Marketing Components</h2>

          {marketingCollections.map((collection: Collection) => {
            return (
              <div key={collection.title}>
                <h2>{collection.title}</h2>

                <ul className="grid grid-cols-5 gap-8">
                  {collection.children.map((component: ComponentCard) => (
                    <Card key={component.title} item={component} />
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home
