import type { NextPage } from 'next'

import { getCategoryBySlug } from '../lib/categories'

import Banner from '../components/content/banner'
import Listing from '../components/category/listing'

export async function getStaticProps() {
  const marketingCategory = getCategoryBySlug('marketing', [
    'title',
    'collections',
  ])

  const applicationCategory = getCategoryBySlug('application', [
    'title',
    'collections',
  ])

  return {
    props: {
      marketingCategory,
      applicationCategory,
    },
  }
}

type Props = {
  marketingCategory: any
  applicationCategory: any
}

const Home: NextPage<Props> = ({ marketingCategory, applicationCategory }) => {
  return (
    <>
      <Banner title="Open Source Tailwind CSS Components" subtitle="HyperUI">
        HyperUI is an open source Tailwind CSS component library featuring over
        200+ components. As HyperUI is open source these components are free to
        use. It also means that you are welcome to create a pull request and add
        your own components 🥳.
      </Banner>

      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-8">
        <Listing
          title={marketingCategory.title}
          collections={marketingCategory.children}
        />

        <Listing
          title={applicationCategory.title}
          collections={applicationCategory.children}
        />
      </div>
    </>
  )
}

export default Home
