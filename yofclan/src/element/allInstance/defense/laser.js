import Defense from "../allInstance.js";
let newId = 0;

export class Laser extends Defense {
  newId = newId + 1;

  constructor() {
     let finalId = "laser" + newId.toString();
    super("laser","defense", finalId, 40, 0,0);
  }
}
