import { words } from '../assets/words'

export function randomWord() {
  return words[Math.floor(Math.random() * words.length)]
}
