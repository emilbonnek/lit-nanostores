import { ReactiveControllerHost } from "lit";
import { WritableAtom } from "nanostores";
import { StoreController } from "./StoreController";
import type { Constructable } from "./Contructable";

export function useStore<AtomType>(atom: WritableAtom<AtomType>) {
  return function <T extends Constructable<ReactiveControllerHost>>(ctr: T) {
    return class extends ctr {
      constructor(...args: any[]) {
        super(...args);
        new StoreController(this, atom);
      }
    };
  };
}
