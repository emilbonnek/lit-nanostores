import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import { booleanAtom } from "./stores/booleanStore";
import { stringAtom } from "./stores/stringStore";
import { numberAtom } from "./stores/numberStore";
import { listAtom } from "./stores/listStore";
import { objectAtom } from "./stores/objectStore";
import { useStore } from "./nanostores/lit/useStore";

@customElement("multi-demo-usestore")
@useStore(booleanAtom)
@useStore(stringAtom)
@useStore(numberAtom)
@useStore(listAtom)
@useStore(objectAtom)
export class AdvancedDemo extends LitElement {
  render() {
    return html`<h3>Multi</h3>
      <form>
        <div>
          <label for="boolean">Boolean</label>
          <input
            id="boolean"
            type="checkbox"
            .checked=${booleanAtom.get()}
            @change=${() => {
              booleanAtom.set(!booleanAtom.get());
            }}
          />
        </div>
        <div>
          <label for="string">String</label>
          <input
            id="string"
            type="text"
            .value=${stringAtom.get()}
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
            .value=${numberAtom.get()}
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
          <output id="list">${listAtom.get().length}</output>
        </div>

        <hr />
        <div>
          <label for="object.string">Object.string</label>
          <input
            id="object.string"
            type="text"
            .value=${objectAtom.get().name}
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
            .value=${objectAtom.get().birthday.toISOString().substr(0, 10)}
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
            .value=${objectAtom.get().favouriteIceCream}
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
    "multi-demo-usestore": AdvancedDemo;
  }
}
