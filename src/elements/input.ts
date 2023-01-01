import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('hangman-input')
export class HangmanInput extends LitElement {
  render() {
    return html` <input
      type="text"
      required
      @input=${this._changeHandler}
    />`
  }

  private _changeHandler(event: InputEvent) {
    const target = event.target as HTMLInputElement
    if (!target || !event.data) return

    // Check if input is a letter
    if (!this.isLetter(event.data)) {
      target.value = ''
      return
    }

    // Check if input is a single letter
    if (target.value.length > 1) {
      target.value = event.data
    }

    this.dispatchEvent(
      new CustomEvent('letter-changed', {
        detail: event.data
      })
    )
  }

  private isLetter(str: string) {
    return Boolean(str.match(/^[A-Za-z]*$/))
  }

  static styles = css`
    input {
      width: 70px;
      height: 70px;
      border: #414141 solid 4px !important;
      border-radius: 255px 15px 225px 15px/15px 225px 15px 255px !important;
      padding: 1rem 0.5rem !important;
      background-color: rgba(0, 0, 0, 0);
      line-height: 50px;
      color: inherit;
      text-align: center;
      font-size: 3rem;
      margin: 0 2px;
      font-family: inherit;
      margin-right: 1.5rem;
    }

    input:focus,
    input:focus-visible {
      outline: none;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'hangman-input': HangmanInput
  }
}
