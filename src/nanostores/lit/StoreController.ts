import { ReactiveController, ReactiveControllerHost } from "lit";
import { WritableAtom } from "nanostores";

export class StoreController<AtomType> implements ReactiveController {
  private _atom: WritableAtom<AtomType>;
  private _unsubscribe: () => void;

  get value() {
    return this._atom.get();
  }

  constructor(host: ReactiveControllerHost, atom: WritableAtom<AtomType>) {
    this._atom = atom;
    host.addController(this);
    this._unsubscribe = this._atom.subscribe(() => {
      host.requestUpdate();
    });
  }

  // Unsubscribe from the store when the host disconnects
  hostDisconnected() {
    this._unsubscribe!();
  }
}
