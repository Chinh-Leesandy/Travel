export interface Amenity {
  label: string
  value: string
  id: string
}

export const amenities: Amenity[] = [
  { id: '1', label: 'Free Wi-Fi', value: 'WIFI' },
  { id: '2', label: 'Swimming Pool', value: 'SWIMMING_POOL' },
  { id: '3', label: 'Spa', value: 'SPA' },
  { id: '4', label: 'Restaurant', value: 'RESTAURANT' },
  { id: '5', label: 'Parking', value: 'PARKING' },
  { id: '6', label: 'Business Center', value: 'BUSINESS_CENTER' },
  { id: '7', label: 'Massage', value: 'MASSAGE' },
  { id: '8', label: 'Meeting Rooms', value: 'MEETING_ROOMS' },
  { id: '9', label: 'Aiport shuttle', value: 'AIRPORT_SHUTTLE' }
]