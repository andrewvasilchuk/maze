import type { Maze } from './interfaces/maze'
import type { Location } from './interfaces/location'

export class MazeImpl implements Maze<string> {
  constructor(private readonly matrix: string[][]) {}

  at(location: Location): string {
    return this.matrix[location.x][location.y]
  }

  within(location: Location): boolean {
    if (location.x < 0) return false
    if (location.y < 0) return false
    return location.x < this.matrix.length && location.y < this.matrix[0].length
  }

  solved(value: string): boolean {
    return value === 'X'
  }

  obstacle(value: string): boolean {
    return value === '#'
  }
}
