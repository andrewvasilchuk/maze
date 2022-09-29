import test from 'ava'

import { LocationImpl } from '../location'
import { MazeImpl } from '../maze'
import { MazeSolver } from '../solver'

test('it should solve a maze', (t) => {
  const solver = new MazeSolver()
  const maze = new MazeImpl([
    ['.', '.', '.'],
    ['.', '#', '.'],
    ['.', '#', 'X'],
  ])

  t.deepEqual(solver.solve(maze, new LocationImpl(0, 0)), {
    solved: true,
    path: [
      new LocationImpl(0, 0),
      new LocationImpl(0, 1),
      new LocationImpl(0, 2),
      new LocationImpl(1, 2),
      new LocationImpl(2, 2),
    ],
  })
})

test('it should detect an unsolvable maze', (t) => {
  const solver = new MazeSolver()
  const maze = new MazeImpl([
    ['.', '.', '.'],
    ['.', '#', '#'],
    ['.', '#', 'X'],
  ])

  t.deepEqual(solver.solve(maze, new LocationImpl(0, 0)), {
    solved: false,
    path: [],
  })
})
