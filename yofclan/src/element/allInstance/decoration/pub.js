import { Batiment } from "../allInstance.js";

export class Pub extends Batiment {
  static id = 0;

  constructor() {
    Pub.id++;
    let finalId = "holograme" + Pub.id.toString();
    super(
      "holograme",
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
