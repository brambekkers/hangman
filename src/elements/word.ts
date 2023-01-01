import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('hangman-word')
export class HangmanWord extends LitElement {
  @property({ attribute: true })
  public word: string = ''

  @property({ attribute: true })
  public letters: string[] = []

  render() {
    return html`<div class="word">
      ${this.word
        .split('')
        .map((letter) => html`<div class="letter">${this.letters.includes(letter) ? letter : '_'}</div>`)}
    </div>`
  }

  static styles = css`
    .word {
      display: flex;
      direction: row;
      font-size: 4rem;
      line-height: 2rem;
      gap: 2rem;
      margin: 4rem 0;
    }
    .letter {
      text-transform: lowercase;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'hangman-word': HangmanWord
  }
}
