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
      <Banner
        title="HyperUI"
        subtitle="Free Open Source Tailwind CSS Components"
      >
        HyperUI is a collection of free Tailwind CSS components that can be used
        in your next project. With a range of components, you can build your
        next marketing website, admin dashboard, ecommerce store and much more.
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
