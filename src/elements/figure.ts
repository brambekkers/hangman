import { LitElement, css, svg, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("hangman-figure")
export class HangmanFigure extends LitElement {
	@property({ attribute: true })
	misses: number = 0;

	render() {
		return html`<svg
			class="figure"
			viewBox="0 0 1 1"
			width="320"
			height="320"
		>
			${this.paths.slice(0, this.misses)}
		</svg>`;
	}

	private paths = [
        svg`<path class="path" pathLength="1" d="M 0.1 0.9 H 0.9">`, 
        svg`<path class="path" pathLength="1" d="M 0.5 0.9 V 0.1" />`,
        svg`<path class="path" pathLength="1" d="M 0.25 0.1 H 0.9" />`,
        svg`<path class="path" pathLength="1" d="M 0.8 0.1 V 0.2" />`,
        svg`<circle class="path" pathLength="1" cx="0.8" cy="0.275" r="0.075" />`,
        svg`<path class="path" pathLength="1" d="M 0.8 0.35 V 0.6" />`,
        svg`<path class="path" pathLength="1" d="M 0.8 0.4 l -0.15 0.15" />`,
        svg`<path class="path" pathLength="1" d="M 0.8 0.4 l 0.15 0.15" />`,
        svg`<path class="path" pathLength="1" d="M 0.8 0.6 l -0.15 0.15" />`,
        svg`<path class="path" pathLength="1" d="M 0.8 0.6 l 0.15 0.15" />`,
    ];

    static styles = css`
        .path {
            fill: none;
            stroke: currentColor;
            stroke-width: 0.01;
            stroke-dasharray: 1;
            stroke-dashoffset: 1;
            animation: dash 0.25s linear forwards;
        }

        @keyframes dash {
            to {
                stroke-dashoffset: 0;
            }
        }
    `;
}

declare global {
	interface HTMLElementTagNameMap {
		"hangman-figure": HangmanFigure;
	}
}
