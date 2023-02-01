import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import "./single-demo";
import "./multi-demo";
import "./single-demo-mixin";
import "./multi-demo-mixin";
import "./single-demo-decorator";
import "./multi-demo-decorator";

@customElement("my-app")
export class MyApp extends LitElement {
  render() {
    return html`<h1 style="text-align: center">lit-nanostores</h1>

      <h2>Using StoreController</h2>
      <div style="display: flex; column-gap: 3em; justify-content: center">
        <div>
          <single-demo></single-demo>
          <multi-demo></multi-demo>
        </div>
        <div>
          <single-demo></single-demo>
          <multi-demo></multi-demo>
        </div>
      </div>

      <h2>Using @useStores decorator</h2>
      <div style="display: flex; column-gap: 3em; justify-content: center">
        <div>
          <single-demo-decorator></single-demo-decorator>
          <multi-demo-decorator></multi-demo-decorator>
        </div>
        <div>
          <single-demo-decorator></single-demo-decorator>
          <multi-demo-decorator></multi-demo-decorator>
        </div>
      </div>

      <h2>Using @withStores mixin</h2>
      <div style="display: flex; column-gap: 3em; justify-content: center">
        <div>
          <single-demo-mixin></single-demo-mixin>
          <multi-demo-mixin></multi-demo-mixin>
        </div>
        <div>
          <single-demo-mixin></single-demo-mixin>
          <multi-demo-mixin></multi-demo-mixin>
        </div>
      </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-app": MyApp;
  }
}
