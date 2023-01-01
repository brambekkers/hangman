import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { randomWord } from './utilities/words'

@customElement('hangman-game')
export class HangmanGame extends LitElement {
  @property()
  word: string = randomWord()

  render() {
    return html`
      <h2>${this.word}</h2>
      <hangman-input @value-changed="${this.valueChanged}"></hangman-input>
      <hangman-button @click=${() => alert('click')}>Guess</hangman-button>
    `
  }

  valueChanged(e: CustomEvent) {
    console.log(randomWord())

    console.log(e.detail)
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'hangman-game': HangmanGame
  }
}
