// !function to display a go window according to different problem
function ErrorWindos(errorType) {
  let value = "";
  let actualValue = "";
  let element = localStorage.getItem("myMairie");
  const myMairie = JSON.parse(element);
  let reference = "";
  let finalMessage = "";
  //* checking of the possible error type 
  if (errorType === undefined) {
    actualValue = myMairie.currentOil;
    finalMessage =
      "You can buy this you have " + actualValue + " oil and it's cost 150 oil";
    window.alert(finalMessage);
  } else {
      //* full place
    const costValue = errorType[2];
    if (errorType[0] === "maxBatiment") {
      value ="You can't buy this batiment, you have max batiment of this type. ";
      if (errorType[1] === "military") {
        reference = myMairie.maxMilitary;
        actualValue = myMairie.currentMilitaryBat.length;
      } else if (errorType[1] === "Goldstorage") {
        reference = myMairie.maxGOldStorage;
        actualValue = myMairie.currentNumberGOldStorage.length;
      } else if (errorType[1] === "OIlStorage") {
        reference = myMairie.maxOIlStorage;
        actualValue = myMairie.currentNumberOilStorage.length;
      } else if (errorType[1] === "defense") {
        reference = myMairie.maxDefense;
        actualValue = myMairie.currentNumberDefense.length;
      } else if (errorType[1] === "Goldmine") {
        reference = myMairie.maxGOldMining;
        actualValue = myMairie.currentNumberGOldMining.length;
      } else if (errorType[1] === "Oilmine") {
        reference = myMairie.maxOilMining;
        actualValue = myMairie.currentNumberOilMining.length;
      }
        finalMessage = value + "You have " + actualValue + " " + errorType[1] + "and you can only have " + reference + " " + errorType[1] + " batiment if you want more upgrade the Mairie.";
        
    // * No money error
    } else if (errorType[0] === "noEnouthRessource") {
      value = "You can't buy this batiment, you have no enouth ressource";
      if (errorType[3] === "oil") {
        actualValue = myMairie.currentOil;
      } else if (errorType[3] === "gold") {
        actualValue = myMairie.currentGold;
      }
      finalMessage =value + "you have " + actualValue + "and it cost " + costValue;
    }
  }
  return window.alert(finalMessage);
}   
export default ErrorWindos