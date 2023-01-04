import { LitElement, css, html } from 'lit'
import { customElement, property, query, queryAll } from 'lit/decorators.js'

interface Vector {
  x: number
  y: number
}

@customElement('hangman-moving-letter')
export class HangmanMovingLetter extends LitElement {
  @property({ attribute: true })
  public letter: string = ''

  @property({ attribute: true })
  public startPosition: Vector = { x: 0, y: 0 }
  @property({ attribute: true })
  public endPosition: Vector = { x: 0, y: 0 }

  render() {
    return html`<h1 id="moving-letter">${this.letter}</h1>`
  }
  @query('#moving-letter') movingletter!: HTMLSelectElement | undefined

  static styles = css`
    #moving-letter {
      position: absolute;
      top: 0;
      left: 0;
      color: inherit;
      font-size: 3rem;
      font-family: inherit;
      translate: -50% -50%;
      font-weight: 400;
      margin: 0;
      transition: top 0.5s linear, left 0.5s ease-in, font-size 0.5s ease-in;
    }
  `

  firstUpdated() {
    setTimeout(() => {
      const button = this.getRootNode().host.shadowRoot?.getElementById('form').shadowRoot.getElementById('button')
      const input = this.getRootNode()
        .host.shadowRoot?.getElementById('form')
        .shadowRoot.getElementById('input')
        .shadowRoot.querySelector('input')

      // Set start position
      var rect = input.getBoundingClientRect()
      this.startPosition.y = rect.top + rect.height / 2
      this.startPosition.x = rect.left + rect.width / 2
      this.toStartPosition()

      button?.addEventListener('click', () => {
        this.moveToEndPosition()
      })
    }, 1000)
  }

  toStartPosition() {
    if (!this.movingletter) return

    this.movingletter.style.transitionDuration = '0s'
    this.movingletter.style.opacity = '0'
    this.movingletter.style.fontSize = '3rem'
    this.movingletter.style.top = `${this.startPosition.y}px`
    this.movingletter.style.left = `${this.startPosition.x}px`
  }

  moveToEndPosition() {
    if (!this.movingletter) return
    this.getEndPosition()
    this.movingletter.style.transitionDuration = '0.5s'
    this.movingletter.style.opacity = '1'
    this.movingletter.style.fontSize = '2rem'
    this.movingletter.style.top = `${this.endPosition.y}px`
    this.movingletter.style.left = `${this.endPosition.x}px`

    setTimeout(() => {
      this.toStartPosition()
    }, 500)
  }

  getEndPosition() {
    const guessedLetters = this.getRootNode()
      .host.shadowRoot?.getElementById('guest-letters')
      .shadowRoot.querySelectorAll('.letter')
    guessedLetters.forEach((letter: HTMLSpanElement) => {
      if (letter.innerText !== this.letter) return
      const rect = letter.getBoundingClientRect()
      this.endPosition.y = rect.top + rect.height / 2
      this.endPosition.x = rect.left + rect.width / 2
    })
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hangman-moving-letter': HangmanMovingLetter
  }
}
