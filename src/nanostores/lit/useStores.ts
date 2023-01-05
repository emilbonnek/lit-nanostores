import { ReactiveControllerHost } from "lit";
import { WritableAtom } from "nanostores";
import type { Constructable } from "./Contructable";
import { StoresController } from "./StoresController";

export function useStores(...atoms: WritableAtom<any>[]) {
  return <T extends Constructable<ReactiveControllerHost>>(constructor: T) => {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        new StoresController(this, atoms);
      }
    };
  };
}
