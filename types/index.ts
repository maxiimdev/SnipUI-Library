export interface Item {
  text: string
  path: string
  items: { name: string; path: string }[]
}

// types/card.ts
export interface Card {
  title: string
  text: string
  codeTitle: string
  code: string
  content: {
    type:
      | 'text'
      | 'button'
      | 'input'
      | 'loader'
      | 'checkbox'
      | 'map'
      | 'modal'
      | 'custom'
    props?: Record<string, any>
    children?: string | Card[]
  }
}
