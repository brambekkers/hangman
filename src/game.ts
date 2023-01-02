import { css, html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { randomWord } from './utilities/words'

@customElement('hangman-game')
export class HangmanGame extends LitElement {
  @property() word: string = randomWord()
  @property() guessedLetters: string[] = []
  @property() lastGuessedLetter: string = ''
  @property() misses: number = 0
  @property() hasWon: boolean = false

  render() {
    return html`
      <hangman-letters
        id="guest-letters"
        .letters=${this.guessedLetters}
      ></hangman-letters>
      <hangman-figure misses=${this.misses}></hangman-figure>
      <hangman-word
        word="${this.word}"
        .letters=${this.guessedLetters}
      ></hangman-word>
      <hangman-moving-letter letter=${this.lastGuessedLetter}></hangman-moving-letter>
      ${this.getBottemElement()}
    `
  }

  getBottemElement() {
    if (this.misses >= 10) {
      return html`<hangman-end-message>Game Over!</hangman-end-message>`
    } else if (this.hasWon) {
      return html`<hangman-end-message>You won!</hangman-end-message>`
    }
    return html`<hangman-form
      id="form"
      @guess="${this.onGuess}"
    ></hangman-form>`
  }

  private onGuess(event: CustomEvent) {
    // Set last guessed letter for moving letter animation
    this.lastGuessedLetter = event.detail

    // Check if letter has already been guessed
    if (this.guessedLetters.includes(event.detail)) return
    this.guessedLetters = [...this.guessedLetters, event.detail]

    if (!this.word.includes(event.detail)) {
      this.misses++
      return
    }

    // Check if word is complete
    const isComplete = this.word?.split('').every((letter) => this.guessedLetters.includes(letter))
    if (isComplete) this.hasWon = true
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'hangman-game': HangmanGame
  }
}
