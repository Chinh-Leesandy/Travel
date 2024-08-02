export interface TabServiceItem {
  id: string
  name: string
  active: boolean
}

export const TabService: TabServiceItem[] = [
  {
    id: 'tourandactive',
    name: 'Tour And Active',
    active: true
  },
  {
    id: 'flight',
    name: 'Flight',
    active: false
  },
  {
    id: 'hotel',
    name: 'Hotel',
    active: false
  }
]
