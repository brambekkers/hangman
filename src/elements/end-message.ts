import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('hangman-end-message')
export class HangmanEndMessage extends LitElement {
  render() {
    return html`<h1 class="message">
      <slot></slot>
    </h1>`
  }

  static styles = css`
    .message {
      font-size: 5rem;
      color: #bc2f38;
      font-weight: 800;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'hangman-button': HangmanEndMessage
  }
}
