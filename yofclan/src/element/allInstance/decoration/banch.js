import Decoration from "../allInstance.js"

export class Banch extends Decoration {
  static id = 0;

  constructor() {
    Banch.id++;
    let finalId = "banvch" + Banch.id.toString();
    super(
      "banch",
      "decoration",
      finalId,
      0,
      30,
      "nothing",
      0,
      0,
      0,
      "nothing",
      0,
      0
    );
  }
}