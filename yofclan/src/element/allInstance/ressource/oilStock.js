import { OilStorage } from '../allInstance.js';
let newId = -1;

export class OilSTORAGE extends OilStorage {
  newId = newId + 1;
  constructor() {
    let finalId = "oil" + newId.toString();
    super("oil", "mining", finalId, 0, 1000, 0);
  }
}
