import type { Location } from './interfaces/location'

/**
 * Utility structure which allows to store unique {@link Location locations}.
 */
export class LocationSet<T extends Location> {
  private readonly set = new Set<string>()

  add(location: T): void {
    this.set.add(location.toString())
  }

  has(location: T): boolean {
    return this.set.has(location.toString())
  }
}
