import { ReactiveController, ReactiveControllerHost } from "lit";
import { WritableAtom } from "nanostores";

export class StoresController implements ReactiveController {
  private unsubscribes: undefined | (() => void)[];

  constructor(
    private host: ReactiveControllerHost,
    private atoms: WritableAtom[]
  ) {
    host.addController(this);
  }

  hostConnected() {
    this.unsubscribes = this.atoms.map((atom) =>
      atom.subscribe(() => this.host.requestUpdate())
    );
  }

  hostDisconnected() {
    this.unsubscribes?.forEach((unsubscribe) => unsubscribe());
  }
}
