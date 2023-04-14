import Decoration from "../allInstance.js";

export class Holograme extends Decoration {
  static id = 0;

  constructor() {
    Holograme.id ++
    let finalId = "Holograme" + Holograme.id.toString();
    super("Holograme", "decoration", finalId, 0);
  }
}
