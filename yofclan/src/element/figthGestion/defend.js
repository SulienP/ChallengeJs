import toLocalStorage from "../gameManager/toLocalStorage";

function defend() {
    let defendValue = 0
    let element = localStorage.getItem("myMairie");
    const myMairie = JSON.parse(element);
    for (const element of myMairie.currentNumberDefense) {
        defendValue = defendValue + element.defense;
    }
    for (const element of myMairie.currentMilitaryBat) {
      defendValue = defendValue + element.defense;
    }
    console.log(defendValue);
    defendValue = defendValue + 15
    let pourcentOfdefeat = Math.random() * (defendValue - (defendValue - 1) + 1) + defendValue - 1;
    console.log( pourcentOfdefeat );
    if (pourcentOfdefeat > (defendValue - 0.3)) {
        const lessGold = myMairie.currentGold - (100 * myMairie.level)
         myMairie.currentGold = lessGold;
        if (myMairie.currentGold <= 0) {
            myMairie.currentGold = 0
        }
        const lessOil = myMairie.currentOil - 100 * myMairie.level;
         myMairie.currentOil = lessOil; 
         if (myMairie.currentOil <= 0) {
           myMairie.currentOil = 0;
        }
        toLocalStorage(myMairie ,"myMairie")
        window.alert("You have been attacked and lost " + lessGold + "gold and " + lessOil + "oil");
    } else {
        window.alert("Congrtulation you have been attacked and win")
    }
}
export default defend