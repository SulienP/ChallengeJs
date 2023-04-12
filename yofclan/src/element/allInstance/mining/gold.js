import GoldMining from "../allInstance.js";
let newId = -1;

export class GoldMine extends GoldMining {
  newId = newId + 1;

    constructor() {
       let  finalId = "gold" + newId.toString();
    super("gold","mining",finalId, 15, 150,0,0);
  }
}
