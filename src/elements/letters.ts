import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('hangman-letters')
export class HangmanLetters extends LitElement {
  @property({ attribute: true })
  public letters: string[] = []

  render() {
    return html`<div>
      <h2>Guessed Letters</h2>
      <div class="letters">${this.letters.map((letter) => html`<span class="letter">${letter}</span>`)}</div>
    </div>`
  }

  static styles = css`
    .letters {
      display: flex;
      direction: row;
      font-size: 2rem;
      line-height: 2rem;
      gap: 2rem;
      margin: 1rem 0 2rem 0;
      min-width: 400px;
      min-height: 3rem;
    }
    .letter {
      text-transform: lowercase;
      animation: smooth 5ms ease-in;
      animation-delay: 0.5s;
      opacity: 0;
      animation-fill-mode: forwards;
    }

    @-webkit-keyframes smooth {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'hangman-letters': HangmanLetters
  }
}
