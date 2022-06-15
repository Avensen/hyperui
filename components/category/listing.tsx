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
    <div className="space-y-4">
      <h2 className="text-lg font-bold sm:text-xl">{title}</h2>

      {collections.map((collection: Collection) => {
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
  )
}

export default Listing
