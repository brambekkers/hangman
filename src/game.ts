import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { randomWord } from "./utilities/words";

@customElement("hangman-game")
export class HangmanGame extends LitElement {
	@property()
	word: string = randomWord();

	@property()
	letters: string[] = [];

	@property()
	misses: number = 0;

	render() {
		return html`
			<hangman-figure misses=${this.misses}></hangman-figure>
			<hangman-word word="${this.word}" .letters=${this.letters}></hangman-word>
			<hangman-form @guess="${this.onGuess}"></hangman-form>
		`
	}

	onGuess(event: CustomEvent) {
		if (!this.word.includes(event.detail)) {
			this.misses++;
		}
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
