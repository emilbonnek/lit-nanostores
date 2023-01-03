import { WritableAtom } from "nanostores";
import { StoreController } from "./StoreController";

export function useStore<AtomType>(atom: WritableAtom<AtomType>) {
  return (constructor: Function) => {
    const originalConnectedCallback = constructor.prototype.connectedCallback;
    constructor.prototype.connectedCallback = function () {
      new StoreController(this, atom);
      originalConnectedCallback.call(this);
    };
  };
}
