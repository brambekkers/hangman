import { words } from '../assets/words.json'

export function randomWord() {
  return words[Math.floor(Math.random() * words.length)]
}
