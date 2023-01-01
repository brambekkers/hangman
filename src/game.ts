import { css, html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { randomWord } from './utilities/words'

@customElement('hangman-game')
export class HangmanGame extends LitElement {
  @property() word: string = randomWord()
  @property() guessedLetters: string[] = []

  render() {
    return html`
      <hangman-word
        word="${this.word}"
        .letters=${this.guessedLetters}
      ></hangman-word>
      <hangman-form @guess="${this.valueChanged}" />
    `
  }

  private valueChanged(e: CustomEvent) {
    this.guessedLetters.push(e.detail)
    this.guessedLetters = [...new Set(this.guessedLetters)]
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
