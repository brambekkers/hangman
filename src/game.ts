import { css, html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { randomWord } from './utilities/words'

@customElement('hangman-game')
export class HangmanGame extends LitElement {
  @property() word: string = randomWord()
  @property() guessedLetters: string[] = []
  @property() misses: number = 0;

  render() {
    return html`
    <hangman-figure misses=${this.misses}></hangman-figure>
      <hangman-word
        word="${this.word}"
        .letters=${this.guessedLetters}
      ></hangman-word>
      ${this.misses < 10
        ? html`<hangman-form @guess="${this.onGuess}"></hangman-form>`
        : html`<h1>Game Over!</h1>`
      }
    `
  }

  private onGuess(event: CustomEvent) {
    this.guessedLetters.push(event.detail)
    this.guessedLetters = [...new Set(this.guessedLetters)]
    
    if (!this.word.includes(event.detail)) {
      this.misses++;
    }
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
