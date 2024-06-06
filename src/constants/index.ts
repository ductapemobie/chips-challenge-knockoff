import type { Entity, State } from "@/types";

export const keyMapping: Record<string, Function> = {
  'ArrowUp': (state: State) => state.charPosition.y--,
  'ArrowDown': (state: State) => state.charPosition.y++,
  'ArrowLeft': (state: State) => state.charPosition.x--,
  'ArrowRight': (state: State) => state.charPosition.x++,
}

export const defaultStart: Entity = {
  type: 'char',
  x: 3,
  y: 3,
}