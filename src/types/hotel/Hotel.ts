export interface Hotel {
  id: string
  name: string
  distance: {
    unit: string
    value: string
  }
  amenities: string[]
}
