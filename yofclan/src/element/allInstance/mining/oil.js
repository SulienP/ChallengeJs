import OilMining from "../allInstance.js";
let newId = -1;

export class OilMine extends OilMining {
  newId = newId + 1;

    constructor() {
      let  finalId = "oil" + newId.toString();
    super("oil", "mining", finalId,  15, 150, 0,0);
  }
}
