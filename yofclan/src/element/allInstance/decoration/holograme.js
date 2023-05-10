import { Batiment } from "../allInstance.js";

export class Holograme extends Batiment {
  static id = 0;

  constructor() {
    Holograme.id++;
    let finalId = "holograme" + Holograme.id.toString();
    super(
      "holograme",
      "decoration",
      finalId,
      0,
      0,
      30,
      "nothing",
      0,
      0,
      0,
      "nothing",
      0,
      0,
      "nothing",
      0
    );
  }
}
