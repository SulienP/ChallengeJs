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
    console.log(attackValue, defenseValue)
}

export default fight;