import type { Maze } from './interfaces/maze'
import type { Location } from './interfaces/location'
import { LocationImpl } from './location'
import { LocationMap } from './location-map'
import { LocationSet } from './location-set'
import { UnableToReconstructPath } from './solver.errors'

export class MazeSolver {
  solve(
    maze: Maze<unknown>,
    start: Location
  ): { solved: boolean; path: Location[] } {
    const queue: Location[] = []
    const visited = new LocationSet()
    visited.add(start)
    queue.push(start)
    const trace = new LocationMap<Location>()
    while (queue.length > 0) {
      const current = queue.shift() as Location
      const value = maze.at(current)
      if (maze.solved(value)) {
        return { solved: true, path: this.reconstruct(trace, start, current) }
      }
      for (const location of this.surrounding(current)) {
        if (visited.has(location)) continue
        if (maze.within(location) === false) continue
        const value = maze.at(current)
        if (maze.obstacle(value)) continue
        queue.push(location)
        visited.add(location)
        trace.set(location, current)
      }
    }
    return { solved: false, path: [] }
  }

  private surrounding(location: Location): Location[] {
    const result: Location[] = [
      new LocationImpl(location.x - 1, location.y),
      new LocationImpl(location.x + 1, location.y),
      new LocationImpl(location.x, location.y + 1),
      new LocationImpl(location.x, location.y - 1),
    ]
    return result
  }

  private reconstruct(
    trace: LocationMap<Location>,
    start: Location,
    end: Location
  ): Location[] {
    let location: Location | undefined = end
    const path: Location[] = []
    while (location !== undefined) {
      if (location.isEqual(start)) {
        path.push(location)
        return path.reverse()
      }
      path.push(location)
      location = trace.get(location)
    }
    throw new UnableToReconstructPath(trace, start, end)
  }
}
