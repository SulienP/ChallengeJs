import Decoration from "../allInstance.js"
    let newId = -1;

export class Banch extends Decoration{
    newId  = newId +1
    constructor() {
        let finalId = "banvchu"+newId.toString();
         super("banch", "decoration", finalId,0)
     }

}