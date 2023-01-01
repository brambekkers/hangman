import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('hangman-game')
export class HangmanGame extends LitElement {
  render() {
    return html`
      <hangman-input @value-changed="${this.valueChanged}"></hangman-input>
      <hangman-button @click=${() => alert('click')}>Guess</hangman-button>
    `
  }

  valueChanged(e: CustomEvent) {
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
