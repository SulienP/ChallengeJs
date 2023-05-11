// !Function for do a fight 
function fight(){
    let element = localStorage.getItem("myMairie");
    const myMairie = JSON.parse(element);
    let attackValue = 0;
    let defenseValue = 0;
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
        } else if (pourcentOfDeath >= 0.5 &&  pourcentOfDeath <= 0.9) {
            for (let i = 0; i < (myMairie.stockageOfFigthers.length /2); i++) {
                myMairie.stockageOfFigthers = myMairie.stockageOfFigthers[i]
            }
            alertWindosErro("divideByTwo");
        } else if (myMairie.stockageOfFigthers.length >= 0.9) {
            myMairie.stockageOfFigthers = [];
            alertWindosErro("everyBody")
        }
    } else {
        myMairie.currentOil = myMairie.currentOil + (100 * myMairie.level)
        myMairie.currentGold = myMairie.currentGold + (100 * myMairie.level)
        alertWindosErro("win")
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
                window.alert("Congratulations you win and nobdy is dead you win " + myMairie.currentOil + (100 * myMairie.level) + " oil and " + myMairie.currentGold + (100 * myMairie.level), +" gold ");
                break;
            default:
                break;
        }
    }
}

export default fight;