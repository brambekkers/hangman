import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("hangman-game")
export class HangmanGame extends LitElement {
	render() {
		return html`
			<hangman-button @click=${() => alert("click")}>Guess</hangman-button>
		`;
	}

	static styles = css`
		:host {
			max-width: 1280px;
			margin: 0 auto;
			padding: 2rem;
			text-align: center;
		}
	`;
}

declare global {
	interface HTMLElementTagNameMap {
		"hangman-game": HangmanGame;
	}
}
