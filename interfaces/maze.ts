import type { Location } from './location'

export interface Maze<T> {
  /** Returns a value at a {@link Location} */
  at(location: Location): T
  /** Checks if a {@link Location} within boundaries */
  within(location: Location): boolean
  /** Checks if a value is a maze end */
  solved(value: T): boolean
  /** Checks if a value is an obstacle */
  obstacle(value: T): boolean
}
