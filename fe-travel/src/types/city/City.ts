export interface FamousPlace {
  id: string
  name: string
  img: string
  description: string
}
export interface FamousFood {
  id: string
  name: string
  img: string
  description: string
}

export interface Information {
  description: string
  bestTime: string
  famousPlace: FamousPlace[]
  famousFood: FamousFood[]
}

export interface City {
  id: number
  name: string
  slug: string
  preview: string
  itemsCount: number
  information: Information
}
