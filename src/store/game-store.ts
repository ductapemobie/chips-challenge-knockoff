import { defineStore, } from 'pinia'
import type { Board, Square } from '@/types'
import { debugBoard } from '@/debug-stage'

export const getGameStore = defineStore('game', {
  state: () => ({
    charPosition: {
      x: 0,
      y: 0,
    },
    board: {} as Board,
  }),
  actions: {
    initLevel() {
      //currently only debug level

      this.board = debugBoard
      this.charPosition.x = 3
      this.charPosition.y = 3
    }
  },
  getters: {
    displayBoard(): Square[][] {
      if (!this.board.squares)return [];
      console.log(this.board.squares);
      console.log(this.board.squares.slice(
        this.charPosition.y - 3, this.charPosition.y + 4
      ));
      return this.board.squares.slice(
        this.charPosition.y - 3, this.charPosition.y + 4
      ).map((dispRow: Square[]) => 
        dispRow.slice(this.charPosition.x - 3, this.charPosition.x + 4)
      );
    }
  }
})