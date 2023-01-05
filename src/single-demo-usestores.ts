import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import { useStores } from "./nanostores/lit/useStores";
import { isCartOpen } from "./stores/cartStore";

@customElement("single-demo-usestores")
@useStores(isCartOpen)
export class SingleDemo extends LitElement {
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
    "single-demo-usestores": SingleDemo;
  }
}
