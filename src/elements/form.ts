import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('hangman-form')
export class HangmanForm extends LitElement {
  @property()
  inputLetter: string = ''

  render() {
    return html` <form id="form">
      <hangman-input
        @letter-changed="${({ detail }: { detail: string }) => (this.inputLetter = detail)}"
      ></hangman-input>
      <hangman-button @click="${this._handleSubmit}">Guess</hangman-button>
    </form>`
  }

  private _handleSubmit() {
    if (!this.inputLetter) return
    this.dispatchEvent(
      new CustomEvent('guess', {
        detail: this.inputLetter
      })
    )
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hangman-form': HangmanForm
  }
}
