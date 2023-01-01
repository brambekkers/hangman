import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('hangman-input')
export class HangmanInput extends LitElement {
  render() {
    return html` <input
      type="text"
      required
    />`
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

    .shake {
      /* Start the shake animation and make the animation last for 0.5 seconds */
      animation: shake 0.5s;
      border-color: #bc2f38 !important;
      /* When the animation is finished, start again */
      animation-iteration-count: infinite;
    }

    @keyframes shake {
      0% {
        transform: translate(0.5rem, 0.5rem) rotate(0deg);
      }
      10% {
        transform: translate(-0.5rem, -1rem) rotate(-1deg);
      }
      20% {
        transform: translate(1.5rem, 0px) rotate(1deg);
      }
      30% {
        transform: translate(3px, 1rem) rotate(0deg);
      }
      40% {
        transform: translate(0.5rem, -0.5rem) rotate(1deg);
      }
      50% {
        transform: translate(-0.5rem, 1rem) rotate(-1deg);
      }
      60% {
        transform: translate(1.5rem, 0.5rem) rotate(0deg);
      }
      70% {
        transform: translate(3px, 0.5rem) rotate(-1deg);
      }
      80% {
        transform: translate(-0.5rem, -0.5rem) rotate(1deg);
      }
      90% {
        transform: translate(0.5rem, 1rem) rotate(0deg);
      }
      100% {
        transform: translate(0.5rem, -1rem) rotate(-1deg);
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'hangman-input': HangmanInput
  }
}
