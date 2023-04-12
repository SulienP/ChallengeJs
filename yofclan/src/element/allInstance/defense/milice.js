import Defense from "../allInstance.js";
let newId = -1;
export class Milice extends Defense {
  newId = newId + 1;
  constructor() {
      let finalId = "milice" + newId.toString();

    super("milice", "defense",finalId, 40, 0,0);
  }
}
