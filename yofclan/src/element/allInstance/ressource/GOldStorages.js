import GoldStorage from "../allInstance.js";
let newId = -1;

export class GOLDStorage extends GoldStorage {
  newId = newId + 1;
  constructor() {
    let finalId = "oil" + newId.toString();
    super("gold", "mining", finalId,  1000, 0, 0);
  }
}
