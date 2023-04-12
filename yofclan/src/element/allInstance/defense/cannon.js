import Defense from "../allInstance.js";
let newId = -1;
export class Cannon extends Defense {
  newId = newId + 1;
  
  constructor() {
    let finalId = "cannon" + newId.toString();
      super("cannon","defense", finalId, 40,0,0);
  }
}
