import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import { StoreController } from "./nanostores/lit/StoreController";

import { booleanAtom } from "./stores/booleanStore";
import { stringAtom } from "./stores/stringStore";
import { numberAtom } from "./stores/numberStore";
import { listAtom } from "./stores/listStore";
import { objectAtom } from "./stores/objectStore";

@customElement("multi-demo")
export class AdvancedDemo extends LitElement {
  private $booleanAtom = new StoreController(this, booleanAtom);
  private $stringAtom = new StoreController(this, stringAtom);
  private $numberAtom = new StoreController(this, numberAtom);
  private $listAtom = new StoreController(this, listAtom);
  private $objectAtom = new StoreController(this, objectAtom);

  render() {
    return html`<h3>Multi</h3>
      <form>
        <div>
          <label for="boolean">Boolean</label>
          <input
            id="boolean"
            type="checkbox"
            .checked=${this.$booleanAtom.value}
            @change=${() => {
              booleanAtom.set(!this.$booleanAtom.value);
            }}
          />
        </div>
        <div>
          <label for="string">String</label>
          <input
            id="string"
            type="text"
            .value=${this.$stringAtom.value}
            @keyup=${(e: any) => {
              stringAtom.set(e.target.value);
            }}
          />
        </div>

        <div>
          <label for="number">Number</label>
          <input
            id="number"
            type="number"
            .value=${this.$numberAtom.value}
            @keyup=${(e: any) => {
              numberAtom.set(e.target.value);
            }}
          />
        </div>

        <hr />
        <div>
          <label for="list">List</label>
          <button
            type="button"
            @click=${() => {
              listAtom.set([...listAtom.get(), "new item"]);
            }}
          >
            +
          </button>
          <output id="list">${this.$listAtom.value.length}</output>
        </div>

        <hr />
        <div>
          <label for="object.string">Object.string</label>
          <input
            id="object.string"
            type="text"
            .value=${this.$objectAtom.value.name}
            @keyup=${(e: any) => {
              objectAtom.set({ ...objectAtom.get(), name: e.target.value });
            }}
          />
        </div>
        <div>
          <label for="object.date">Object.date</label>
          <input
            id="object.date"
            type="date"
            .value=${this.$objectAtom.value.birthday
              .toISOString()
              .substr(0, 10)}
            @change=${(e: any) => {
              objectAtom.set({
                ...objectAtom.get(),
                birthday: new Date(e.target.value),
              });
            }}
          />
        </div>
        <div>
          <label for="object.option">Object.option</label>
          <select
            id="object.option"
            .value=${this.$objectAtom.value.favouriteIceCream}
            @change=${(e: any) => {
              objectAtom.set({
                ...objectAtom.get(),
                favouriteIceCream: e.target.value,
              });
            }}
          >
            <option value="vanilla">Vanilla</option>
            <option value="chocolate">Chocolate</option>
            <option value="strawberry">Strawberry</option>
          </select>
        </div>
      </form>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "multi-demo": AdvancedDemo;
  }
}
