import { defineStore, } from 'pinia'
import type { Board, Direction, Square, State } from '@/types'
import { debugBoard } from '@/debug-stage'
import { defaultStart, keyMapping } from '@/constants'
import { loadLevel, parseLevel, parseEntities } from '@/util/board-load'
import { centerVal } from '@/util/centering'

export const getGameStore = defineStore('game', {
  state: (): State => ({
    charPosition: {
      x: 0,
      y: 0,
      direction: 'up'
    },
    board: {} as Board,
  }),
  actions: {
    async initLevel() {
      const level = await loadLevel()

      this.board = parseLevel(level.level)
      const entities = parseEntities(level.entities)

      const startPos = entities.find(
        entity => entity.type === 'char'
      ) || defaultStart

      this.charPosition.x = startPos.x
      this.charPosition.y = startPos.y
    },
    handleKeypress(key: string) {
      this.charPosition.direction = 
        key.slice(5).toLowerCase() as Direction
      keyMapping[key](this.$state);
    }
  },
  getters: {
    displayBoard(): Square[][] {
      if (!this.board.squares)return [];
      const boardCenter = {
        y: centerVal(this.board.height, this.charPosition.y),
        x: centerVal(this.board.width, this.charPosition.x),
      }
      const offset = {x: boardCenter.x - 3, y: boardCenter.y - 3}
      const retBoard = this.board.squares.slice(
        boardCenter.y - 3, boardCenter.y + 4
      ).map((dispRow: Square[]) => 
        dispRow.slice(boardCenter.x - 3, boardCenter.x + 4)
      );
      return retBoard.map((row, rowIndex) => row.map((square, colIndex) => ({
        ...square,
        inhabitant: 
          rowIndex === this.charPosition.y - offset.y
            && colIndex === this.charPosition.x - offset.x
              ? 'C'
              : undefined
      })));
    }
  }
})