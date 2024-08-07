export interface Tour {
  id: string
  name: string
  description: string
  rating: string
  minimumDuration: string
  shortDescription: string
  pictures: [
    string
  ]
  price: {
    amount: string,
    currencyCode: string
  }
  bookingLink: string
}