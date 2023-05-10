import { Soldat, Machine, Robot, Vaisseaux  } from "../allInstance/miltary/figthers/fighter";
import toLocalStorage from "./toLocalStorage";
    let maxPlace = 0;

function training(addFighters) {
    let element = localStorage.getItem("myMairie");
    const myMairie = JSON.parse(element);
    const fighersName = addFighters[1];
    const typeCost = addFighters[2];
    const cost = addFighters[3];
    const place = addFighters[4];
    for (const element of myMairie.currentMilitaryBat) {
        maxPlace = element.place;
    }
    if ((maxPlace === 0)) {
      maxPlace = myMairie.maxPlace;
    }
    let newFighters = "";
    if (typeCost === "oil") {
        if (myMairie.currentOil > cost) {           
            if (myMairie.currentPlaceFighters <= maxPlace) {
                 console.log("hola");
                myMairie.currentPlaceFighters = myMairie.currentPlaceFighters + place
                myMairie.currentOil = myMairie.currentOil - cost
                console.log("ici")
                if (fighersName === "Soldat") {
                    newFighters = new Soldat();
                } else if (fighersName === "Machine") {
                    newFighters = new Machine();
                } else if (fighersName === "Robot") {
                   newFighters = new Robot();
                } else if (fighersName === "Vaisseaux"){
                    newFighters = new Vaisseaux();
                }
                myMairie.stockageOfFigthers.push(newFighters)
                myMairie.maxPlace = maxPlace;
                toLocalStorage(myMairie, "myMairie")
                window.alert("L'ajout de troupes a été effectué")
            } else {
                window.alert("Pas assez de place")
            }
        } else {
            window.alert("Pas assez d'oil");
        }
    }
}
export default training;