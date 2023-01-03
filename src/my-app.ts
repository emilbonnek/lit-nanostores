import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import "./single-demo";
import "./multi-demo";
import "./single-demo-usestore";
import "./multi-demo-usestore";
import "./single-demo-usestores";
import "./multi-demo-usestores";

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

      <h2>Using @useStore decorator</h2>
      <div style="display: flex; column-gap: 3em; justify-content: center">
        <div>
          <single-demo-usestore></single-demo-usestore>
          <multi-demo-usestore></multi-demo-usestore>
        </div>
        <div>
          <single-demo-usestore></single-demo-usestore>
          <multi-demo-usestore></multi-demo-usestore>
        </div>
      </div>

      <h2>Using @useStores decorator</h2>
      <div style="display: flex; column-gap: 3em; justify-content: center">
        <div>
          <single-demo-usestores></single-demo-usestores>
          <multi-demo-usestores></multi-demo-usestores>
        </div>
        <div>
          <single-demo-usestores></single-demo-usestores>
          <multi-demo-usestores></multi-demo-usestores>
        </div>
      </div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-app": MyApp;
  }
}
