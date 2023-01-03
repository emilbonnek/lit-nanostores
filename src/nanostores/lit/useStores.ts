import { WritableAtom } from "nanostores";
import { StoreController } from "./StoreController";

export function useStores(atoms: WritableAtom[]) {
  return (constructor: Function) => {
    const originalConnectedCallback = constructor.prototype.connectedCallback;
    constructor.prototype.connectedCallback = function () {
      atoms.map((atom) => new StoreController(this, atom));
      originalConnectedCallback.call(this);
    };
  };
}
