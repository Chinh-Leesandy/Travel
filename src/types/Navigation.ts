export interface SubNavigationItem {
  id: string
  name: string
  link: string
}

export interface NavigationItem {
  id: string
  name: string
  link: string
  active: boolean
  subItems?: SubNavigationItem[]
}

export const navigation: NavigationItem[] = [
  { id: '1', name: 'Home', link: '/', active: true },
  {
    id: '2',
    name: 'Services',
    link: '/services',
    active: false,
    subItems: [
      { id: '2-1', name: 'Tours', link: '/services/tours' },
      { id: '2-2', name: 'Flight', link: '/services/flight' },
      { id: '2-3', name: 'Hotel', link: '/services/hotel' }
    ]
  },
  { id: '3', name: 'Blogs', link: '/blogs', active: false },
  { id: '4', name: 'AI', link: '/ai', active: false }
]
