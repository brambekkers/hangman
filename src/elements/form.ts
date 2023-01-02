import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('hangman-form')
export class HangmanForm extends LitElement {
  connectedCallback() {
    super.connectedCallback()
    window.addEventListener('keydown', this.onEnter.bind(this))
  }
  disconnectedCallback() {
    window.removeEventListener('keydown', this.onEnter.bind(this))
    super.disconnectedCallback()
  }
  render() {
    return html` <form>
      <p id="input-hint">Enter a letter</p>
      <div>
        <hangman-input
          id="input"
          @input=${this.validate}
        ></hangman-input>
        <hangman-button
          id="button"
          @click="${this.submit}"
          >Guess</hangman-button
        >
      </div>
    </form>`
  }

  private validate(event: InputEvent) {
    const form = this.shadowRoot?.querySelector('form')
    const input = form?.querySelector('#input')?.shadowRoot?.firstElementChild as HTMLInputElement
    if (!input || !event.data) return

    // Check if input is a letter
    if (!this.isLetter(event.data)) {
      input.value = ''
      return
    }

    // Check if input is a single letter
    if (input?.value?.length > 1) {
      input.value = event.data
    }
  }

  private isLetter(str: string) {
    return Boolean(str.match(/^[A-Za-z]*$/))
  }

  onEnter(event: KeyboardEvent) {
    if (event.key !== 'Enter') return
    this.submit()
  }

  private submit() {
    const form = this.shadowRoot?.querySelector('form')
    const input = form?.querySelector('#input')?.shadowRoot?.firstElementChild as HTMLInputElement
    if (!input.value) return this.shakeInput()
    this.dispatchEvent(
      new CustomEvent('guess', {
        detail: input.value
      })
    )
    this.clearInput()
  }

  shakeInput() {
    const form = this.shadowRoot?.querySelector('form')
    const input = form?.querySelector('#input')?.shadowRoot?.firstElementChild as HTMLInputElement

    input.classList.add('shake')
    setTimeout(() => input.classList.remove('shake'), 500)
  }

  clearInput() {
    const form = this.shadowRoot?.querySelector('form')
    const input = form?.querySelector('#input')?.shadowRoot?.firstElementChild as HTMLInputElement

    input.value = ''
    input.focus()
  }

  static styles = css`
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    #input-hint {
      color: #bc2f38;
      font-weight: 800;
      font-size: 1.7rem;
      margin-bottom: 0.2rem;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'hangman-form': HangmanForm
  }
}
