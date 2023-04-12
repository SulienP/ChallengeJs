import Military from "../allInstance.js";
let newId = -1;
export class Camps extends Military {
  newId = newId + 1;
  constructor() {
      let finalId = "Camps" + newId.toString();

    super("Camps", "military",finalId, 4, 40,  5, 0);
  }
}
