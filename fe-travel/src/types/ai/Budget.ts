export interface Budget {
  id: number
  name: string
  img: string
  des: string
}

export const budgets: Budget[] = [
  { id: 1, name: 'Cheap', img: '💵', des: 'Stay conscious of costs' },
  { id: 2, name: 'Moderate', img: '💰', des: 'Keep cost on the average side' },
  { id: 3, name: 'Luxury', img: '💎', des: 'Dont worry about cost' }
]