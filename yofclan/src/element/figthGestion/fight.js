import toLocalStorage from "../gameManager/toLocalStorage";

// !Function for do a fight 
function fight(){
    let element = localStorage.getItem("myMairie");
    const myMairie = JSON.parse(element);
    let attackValue = 0;
    let defenseValue = 0;
    if (myMairie.stockageOfFigthers.length !== 0) {
        for (const element of myMairie.stockageOfFigthers) {
            attackValue = attackValue + element.attaque;
            defenseValue = defenseValue + element.defense;
        }
        const pourcentOfDefeat = Math.random() * (attackValue - (attackValue - 1) + 1) + attackValue - 1;
        if (pourcentOfDefeat > attackValue - 0.1) {
        
            const defense = (Math.random() * (defenseValue - (defenseValue - 1) + 1) + defenseValue - 1).toFixed(1);
            const pourcentOfDeath = defenseValue - defense
            if (pourcentOfDeath <= 0) {
                alertWindosErro("nobody")
                toLocalStorage(myMairie, "myMairie");
            } else if (pourcentOfDeath >= 0.5 && pourcentOfDeath <= 0.9) {
                for (let i = 0; i < (myMairie.stockageOfFigthers.length / 2); i++) {
                    myMairie.stockageOfFigthers = myMairie.stockageOfFigthers[i]
                }
                toLocalStorage(myMairie, "myMairie")
                alertWindosErro("divideByTwo");
            } else if (myMairie.stockageOfFigthers.length >= 0.9) {
                myMairie.stockageOfFigthers = [];
                alertWindosErro("everyBody")
                toLocalStorage(myMairie, "myMairie");
            }
        } else {
            const oilValue = (100 * myMairie.level)
            const goldValue =  (100 * myMairie.level)
            myMairie.currentOil = myMairie.currentOil + oilValue;
            myMairie.currentGold = myMairie.currentGold + goldValue;
            if (myMairie.currentGold > myMairie.maxGoldRessource) {
                myMairie.currentGold = myMairie.maxGoldRessource
            }
            if (myMairie.currentOil > myMairie.maxOIlRessource) {
              myMairie.currentOil = myMairie.maxOIlRessource;
            }
              toLocalStorage(myMairie, "myMairie");
            alertWindosErro("win", [goldValue, oilValue])
        }
        function alertWindosErro(element, value) {
            switch (element) {
                case "nobody":
                    window.alert("You loose but nobody death")
                    break;
                case "divideByTwo":
                    window.alert("You loose your fight and you army is divide by twoo")
                    break;
                case "everyBody":
                    window.alert("You loose and everybody is dead");
                    break
                case "win":
                    window.alert("Congratulations you win and nobdy is dead you win " + value[1] + " oil and " + value[0], +" gold ");
                    break;
                default:
                    break;
            }
        }
    } else {
        window.alert("Please trained troops")
    }
}

export default fight;