import type { Entity } from '@/types'
import axios, { type AxiosResponse } from 'axios'

export async function loadLevel() {
  const entityUrl = 
    'https://raw.githubusercontent.com/ductapemobie/various-assets/main/big-test-level/entities.csv'
  const levelUrl = 
    'https://raw.githubusercontent.com/ductapemobie/various-assets/main/big-test-level/level.csv'

  const [entities, level] = await Promise.all([
    axios.get(entityUrl),
    axios.get(levelUrl),
  ])

  return {entities, level}
}

export function parseLevel(level: AxiosResponse) {
  const rows = level.data.split('\n')
  const [height, width] = rows[0].split(',').map(Number)

  const squares = rows.slice(1)
    .map((row: string) => row.split(',')
    .map(s => ({terrain: parseInt(s)})))
  return {height, width, squares}
}

export function parseEntities(entities: AxiosResponse): Entity[] {
  const rows = entities.data.split('\n');
  return rows.slice(1).map((row: string) => {
    const rowArr = row.split(',')
    return {type: rowArr[0], x: Number(rowArr[1]), y: Number(rowArr[2])}
  })
}