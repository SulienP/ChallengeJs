function AddRessource() {

    let element = localStorage.getItem("myMairie");
    const myMairie = JSON.parse(element);
     const myDate = Date.now();
    let value = localStorage.getItem("firstDate");
    const lastConnection = JSON.parse(value);
    let difference = 0;
    difference = myDate - lastConnection;
    //console.log(difference)
    for (const element of myMairie.currentNumberGOldMining) {
        console.log(myMairie.currentGold+ element.productionByHour);
        myMairie.currentGold = (myMairie.currentGold + element.productionByHour);
    }
    console.log(myMairie.currentGold)
  for (const element of myMairie.currentNumberOilMining) {
    myMairie.currentOil = myMairie.currentOil + element.productionByHour;
  }
  if (myMairie.currentGold > myMairie.maxGoldRessource) {
    myMairie.currentGold = myMairie.maxGoldRessource;
  }
  if (myMairie.currentOil > myMairie.maxOIlRessource) {
    myMairie.currentOil = myMairie.maxOIlRessource;
   
  }

    localStorage.setItem("firstDate", myDate);
    localStorage.setItem("myMairie", JSON.stringify(myMairie));
    window.location.reload();

}
export default AddRessource;