import type { FunctionComponent } from 'react'

import { Collection } from '../../interface/collection'
import { ComponentCard } from '../../interface/component'

import Card from '../collection/card'

type Props = {
  title: string
  collections: Array<Collection>
}

const Listing: FunctionComponent<Props> = ({ title, collections }) => {
  return (
    <div>
      <h2 className="text-xl font-medium">{title}</h2>

      <div className="mt-4 space-y-8">
        {collections.map((collection: Collection) => {
          return (
            <div key={collection.title}>
              <h2 className="font-medium">{collection.title}</h2>

              <p className="mt-1 text-gray-700 max-w-prose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos eaque maiores delectus minus assumenda possimus
                culpa mollitia voluptatibus itaque fugiat.
              </p>

              <ul className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 lg:grid-cols-5">
                {collection.children.map((component: ComponentCard) => (
                  <Card key={component.title} item={component} />
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Listing
