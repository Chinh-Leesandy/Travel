export interface Type {
  id: number
  name: string
  img: string
  des: string
}

export const types: Type[] = [
  { id: 1, name: 'Just me', img: '✈️', des: 'A sole traveles in exploration' },
  { id: 2, name: 'Couple', img: '🥂', des: 'Two traveles in tandem' },
  { id: 3, name: 'Family', img: '🏡', des: 'A group of fun loving adv' },
  { id: 4, name: 'Friends', img: '👭', des: 'A bunch of thrill-seekes' }
]