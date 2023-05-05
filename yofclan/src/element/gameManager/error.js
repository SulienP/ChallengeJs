function ErrorWindos(errorType) {
    let value = "";
    let actualValue = "";
    let element = localStorage.getItem("myMairie");
    const myMairie = JSON.parse(element);
    let costValue = errorType[2];
    let reference = "";
    let finalMessage = "";
    if (errorType[0] === "maxBatiment") {
        value = "You can't buy this batiment, you have max batiment of this type. "
        switch (errorType) {
          case errorType[1] === "military":
            reference = myMairie.maxMilitary;
            actualValue = myMairie.currentMilitaryBat.length;
            break;
          case errorType[1] === "Goldstorage":
            reference = myMairie.maxGOldStorage;
            actualValue = myMairie.currentNumberGOldStorage.length;
            break;
          case errorType[1] === "OIlStorage":
            reference = myMairie.maxOIlStorage;
            actualValue = myMairie.currentNumberOilStorage.length;
            break;

          case errorType[1] === "defense":
            reference = myMairie.maxDefense;
            actualValue = myMairie.currentNumberDefense.length;
            break;
          case errorType[1] === "Goldmine":
            reference = myMairie.maxGOldMining;
            actualValue = myMairie.currentNumberGOldMining.length;
            break;
          case errorType[1] === "Oilmine":
            reference = myMairie.maxOilMining;
            actualValue = myMairie.currentNumberOilMining.length;
            break;
          default:
            break;
        }
        finalMessage = value + "You have" + actualValue + "and you can have only" + reference +"if you want more upgrade the Mairie."
    }else if (errorType[0] === "noEnouthRessource") {
        value = "You can't buy this batiment, you have no enouth ressource"
        if (errorType[3] === "oil") {
              actualValue = myMairie.currentOil;
        } else if (errorType[3] === "gold") {
            actualValue = myMairie.currentGold;
        }
        finalMessage = value + "you have " + actualValue + "and it cost " + costValue;
    }      
    return (
        window.alert(finalMessage)
    )
}   
export default ErrorWindos