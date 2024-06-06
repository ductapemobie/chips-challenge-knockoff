import type { Coords, Entity, Square } from "@/types"

// calcualte where the center of the board should be looking at
export function centerVal(range: number, playerLoc: number): number {
  //dont support range < 7 really, fail as gracefully as possible
  if (range < 7) return Math.ceil(range / 2)

  // closest to low edge is 3
  if (playerLoc < 3)
    return 3
  
  // same thing as above but for high edge
  if (playerLoc > range - 4)
    return range - 4
  
  return playerLoc
}

// return retBoard.map((row, rowIndex) => row.map((square, colIndex) => ({
//   ...square,
//   inhabitant: 
//     rowIndex === this.charPosition.y - offset.y
//       && colIndex === this.charPosition.x - offset.x
//         ? 'C'
//         : undefined
// })));

export function boardMapping(
  square: Square,
  entityList: Entity[],
  rowIndex: number,
  colIndex: number,
  offset: Coords,
): Entity[] {
  const coords: Coords = {
    y: rowIndex - offset.y,
    x: colIndex - offset.x,
  }
  return entityList.filter(entity =>
    entity.x === coords.x
      && entity.y === coords.y
  )
}