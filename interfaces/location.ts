export interface Location {
  x: number
  y: number

  toString(): string
  isEqual(location: Location): boolean
}
