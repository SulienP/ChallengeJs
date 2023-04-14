import Decoration from "../allInstance.js";

export class Pub extends Decoration {
  static id = 0;

  constructor() {
    Pub.id++;
    let finalId = "Pub" + Pub.newId.toString();
    super("Pub", "decoration", finalId, 0);
  }
}
