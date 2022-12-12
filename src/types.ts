export interface Board {
  height: number,
  width: number,
  squares: Square[][]
}

export interface Square {
  terrain: Terrain
  //stub
}

export enum Terrain {
  path,
  wall,
  water,
}