import type { Location } from './interfaces/location'

export class LocationImpl implements Location {
  constructor(public readonly x: number, public readonly y: number) {}

  toString(): string {
    return `${this.x}.${this.y}`
  }

  isEqual(location: Location): boolean {
    return location.x === this.x && location.y === this.y
  }
}
