export interface Coords {
  x: number,
  y: number,
}

export interface CharPosition extends Coords {
  direction: Direction
}

export interface State {
  charPosition: CharPosition,
  board: Board
}

export interface Board {
  height: number,
  width: number,
  squares: Square[][],
}

export interface Square {
  terrain: Terrain,
  inhabitant?: string,
  //stub
}

export type Direction = 
  'up'
  | 'down'
  | 'left'
  | 'right'

export enum Terrain {
  path,
  wall,
  water,
}

export interface Entity extends Coords {
  type: string,
}
