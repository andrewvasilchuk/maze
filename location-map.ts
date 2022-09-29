import type { Location } from './interfaces/location'

/**
 * Utility data structure which allows to use {@link Location} as a key to store data.
 */
export class LocationMap<T = unknown, L extends Location = Location> {
  private readonly map = new Map<string, T>()

  get(location: L): T | undefined {
    return this.map.get(location.toString())
  }

  set(location: L, value: T): void {
    this.map.set(location.toString(), value)
  }
}
