import { ReactiveController, ReactiveControllerHost } from "lit";
import { WritableAtom } from "nanostores";

export class StoresController implements ReactiveController {
  private _unsubscribes: undefined | (() => void)[];

  constructor(
    private _host: ReactiveControllerHost,
    private _atoms: WritableAtom[]
  ) {
    _host.addController(this);
  }

  hostConnected() {
    this._unsubscribes = this._atoms.map((atom) =>
      atom.subscribe(() => this._host.requestUpdate())
    );
  }

  hostDisconnected() {
    this._unsubscribes?.forEach((unsubscribe) => unsubscribe());
  }
}
