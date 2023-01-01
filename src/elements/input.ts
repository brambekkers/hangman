import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('hangman-input')
export class HangmanInput extends LitElement {
  @property()
  inputLetter: string = 'a'

  render() {
    return html` <input
      type="text"
      .value=${this.inputLetter}
      @input=${this._changeHandler}
    />`
  }

  private _changeHandler(event: InputEvent) {
    if (!event.data || !this.isLetter(event.data)) return
    this.inputLetter = event.data

    this.dispatchEvent(
      new CustomEvent('value-changed', {
        detail: event.data
      })
    )
  }

  private isLetter(str: string) {
    return Boolean(str.match(/^[A-Za-z]*$/))
  }

  static styles = css`
    input {
      width: 30px;
      height: 50px;
      background-color: rgba(0, 0, 0, 0.1);
      border: none;
      line-height: 50px;
      text-align: center;
      font-size: 24px;
      font-weight: 200;
      color: white;
      margin: 0 2px;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'hangman-input': HangmanInput
  }
}
