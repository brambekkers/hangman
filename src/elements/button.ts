import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('hangman-button')
export class HangmanButton extends LitElement {
  render() {
    return html`<button type="submit">
      <slot></slot>
    </button>`
  }

  static styles = css`
    button {
      border: #414141 solid 4px;
      border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
      font-size: 2rem;
      padding: 1.7rem 2rem;
      translate: 0 -5px;
      color: inherit;
      font-weight: 500;
      font-family: inherit;
      background-color: transparent;
      cursor: pointer;
      font-weight: 900;
      transition: all 0.25s;
    }
    button:hover {
      scale: 1.1;
      rotate: 2deg;
    }
    button:focus,
    button:focus-visible {
      outline: none;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'hangman-button': HangmanButton
  }
}
