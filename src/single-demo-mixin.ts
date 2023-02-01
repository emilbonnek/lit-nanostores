import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { withStores } from "./nanostores/lit";

import { isCartOpen } from "./stores/cartStore";

@customElement("single-demo-mixin")
export class SingleDemoMixin extends withStores(LitElement, [isCartOpen]) {
  render() {
    return html`
      <h3>Single</h3>
      <input
        type="checkbox"
        .checked=${isCartOpen.get()}
        @change=${() => {
          isCartOpen.set(!isCartOpen.get());
        }}
      />
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "single-demo-mixin": SingleDemoMixin;
  }
}
