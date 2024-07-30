export default interface TravelClassItem {
  id: string
  name: string
  value: string
}
export const TravelClass: TravelClassItem[] = [
  { id: '1', name: 'Economy', value: 'ECONOMY' },
  { id: '2', name: 'Premium Economy', value: 'PREMIUM_ECONOMY' },
  { id: '3', name: 'Business', value: 'BUSINESS' },
  { id: '4', name: 'First', value: 'FIRST' }
]