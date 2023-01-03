import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import { StoreController } from "./nanostores/lit/StoreController";
import { isCartOpen } from "./stores/cartStore";

@customElement("single-demo")
export class SimpleDemo extends LitElement {
  private $isCartOpen = new StoreController(this, isCartOpen);

  render() {
    return html`
      <h3>Single</h3>
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
    "single-demo": SimpleDemo;
  }
}
