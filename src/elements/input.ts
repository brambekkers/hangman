import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('hangman-input')
export class HangmanInput extends LitElement {
  @property()
  render() {
    return html` <input
      id="letter_input"
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
      width: 50px;
      height: 50px;
      background-color: rgba(0, 0, 0, 0.1);
      border: none;
      line-height: 50px;
      text-align: center;
      font-size: 24px;
      color: white;
      margin: 0 2px;
      font-family: inherit;
      font-weight: 700;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'hangman-input': HangmanInput
  }
}
