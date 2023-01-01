import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('hangman-form')
export class HangmanForm extends LitElement {
  @property()
  inputLetter: string = ''

  render() {
    return html` <form>
      <p id="input-hint">Enter a letter:</p>
      <div>
        <hangman-input
          @letter-changed="${({ detail }: { detail: string }) => (this.inputLetter = detail)}"
        ></hangman-input>
        <hangman-button @click="${this._handleSubmit}">Guess</hangman-button>
      </div>
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

  static styles = css`
    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      margin-top: 4rem;
    }
    #input-hint {
      color: #bc2f38;
      font-weight: 800;
      font-size: 1.4rem;
      margin-bottom: 0;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'hangman-form': HangmanForm
  }
}
