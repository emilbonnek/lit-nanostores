import { ReactiveController, ReactiveControllerHost } from "lit";
import { WritableAtom } from "nanostores";

export class StoreController<AtomType> implements ReactiveController {
  private _unsubscribe: undefined | (() => void);

  get value() {
    return this._atom.get();
  }

  constructor(
    private _host: ReactiveControllerHost,
    private _atom: WritableAtom<AtomType>
  ) {
    _host.addController(this);
  }

  hostConnected() {
    this._unsubscribe = this._atom.subscribe(() => {
      this._host.requestUpdate();
    });
  }

  // Unsubscribe from the store when the host disconnects
  hostDisconnected() {
    this._unsubscribe?.();
  }
}
