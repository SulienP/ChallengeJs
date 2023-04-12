import Military from "../allInstance.js";
let newId = -1;
export class Zehi extends Military {

    constructor() {
          newId =newId+1
          let finalId = "Zehi" + (newId + 1).toString();
    super("Zehi","military", finalId, 4, 40,  5, 0);
  }
}
