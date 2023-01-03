import { ReactiveController, ReactiveControllerHost } from "lit";
import { WritableAtom } from "nanostores";

export class StoreController<AtomType> implements ReactiveController {
  private _atom: WritableAtom<AtomType>;
  private _unsubscribe: () => void;
  public value: AtomType;

  constructor(host: ReactiveControllerHost, atom: WritableAtom<AtomType>) {
    this._atom = atom;
    this.value = this._atom.get();
    host.addController(this);
    this._unsubscribe = this._atom.subscribe((value) => {
      this.value = value;
      host.requestUpdate();
    });
  }

  // Unsubscribe from the store when the host disconnects
  hostDisconnected() {
    this._unsubscribe!();
  }
}
