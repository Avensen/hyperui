import { Component, ComponentCard } from './component'

export interface Collection {
  title: string
  components: Array<Component>
  children: Array<ComponentCard>
}

// export interface SubCollection {
//   title: string
//   components: Array<Component>
// }
