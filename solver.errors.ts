import type { Location } from './interfaces/location'
import type { LocationMap } from './location-map'

export class UnableToReconstructPath extends Error {
  constructor(
    public readonly trace: LocationMap,
    public readonly start: Location,
    public readonly end: Location
  ) {
    super('Unable to reconstruct a path')
  }
}
