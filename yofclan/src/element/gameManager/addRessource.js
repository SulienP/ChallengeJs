function AddRessource() {
  let value = localStorage.getItem("firstDate");
  let element = localStorage.getItem("myMairie");
  const lastConnection = JSON.parse(value);
  const myMairie = JSON.parse(element);
  const myDate = Date.now();
  const myDateInHour = ((myDate / (1000 * 60 * 60)));
  const lastConnectionInHour = ((lastConnection / (1000 * 60 * 60)));
  let difference = 0;
  difference = myDateInHour - lastConnectionInHour;
  difference = Math.trunc(difference)
  console.log(difference, "difference")
    for (const element of myMairie.currentNumberGOldMining) {
        myMairie.currentGold = (myMairie.currentGold + element.productionByHour* difference);
    }
  for (const element of myMairie.currentNumberOilMining) {
    myMairie.currentOil = (myMairie.currentOil + element.productionByHour * difference);
  }
  if (myMairie.currentGold > myMairie.maxGoldRessource) {
    myMairie.currentGold = myMairie.maxGoldRessource;
  }
  if (myMairie.currentOil > myMairie.maxOIlRessource) {
    myMairie.currentOil = myMairie.maxOIlRessource;
   
  }
    localStorage.setItem("firstDate", JSON.stringify(myDate));
    localStorage.setItem("myMairie", JSON.stringify(myMairie));

}
export default AddRessource;