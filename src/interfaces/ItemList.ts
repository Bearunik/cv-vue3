export interface SubItem {
  title: string
  descriptions: Array<string>
}

export interface Item {
  title: string
  subtitle: string
  color: string
  subitems: Array<SubItem>
  icon: string
}

export interface ItemList {
  items: Array<Item>
}
