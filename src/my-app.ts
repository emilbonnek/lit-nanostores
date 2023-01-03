import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import "./simple-demo";
import "./advanced-demo";

@customElement("my-app")
export class MyApp extends LitElement {
  render() {
    return html`<h1 style="text-align: center">lit-nanostores</h1>
      <div style="display: flex; column-gap: 3em; justify-content: center">
        <div>
          <simple-demo></simple-demo>
          <advanced-demo></advanced-demo>
        </div>
        <div>
          <simple-demo></simple-demo>
          <advanced-demo></advanced-demo>
        </div>
      </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-app": MyApp;
  }
}
