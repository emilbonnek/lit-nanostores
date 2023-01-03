import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import { StoreController } from "./nanostores/lit/StoreController";

import { atom } from "nanostores";
export const isCartOpen = atom(false);

@customElement("simple-demo")
export class SimpleDemo extends LitElement {
  private $isCartOpen = new StoreController(this, isCartOpen);

  render() {
    return html`
      <h2>Simple Demo</h2>
      <input
        type="checkbox"
        .checked=${this.$isCartOpen.value}
        @change=${() => {
          isCartOpen.set(!this.$isCartOpen.value);
        }}
      />
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "simple-demo": SimpleDemo;
  }
}
