import UpgradeBatiment from "../village/menu/upgradeBatimentElement";

function checkColorAtClick() {
  let value = localStorage.getItem("batimentArray");
  let batimentArray = JSON.parse(value);
  let canvas = document.querySelector("#myVillage");
  let ctx = canvas.getContext("2d");
  let element = localStorage.getItem("myMairie");
  let myMairie = JSON.parse(element);
  let batimentCheck = "";
  let costValue = "";
  let currentLvlValue = ""; 
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "red");
  gradient.addColorStop(1, "blue");
  canvas.addEventListener("click", function (event) {
    const bb = canvas.getBoundingClientRect();
    const x = Math.floor(((event.clientX - bb.left) / bb.width) * canvas.width);
    const y = Math.floor(((event.clientY - bb.top) / bb.height) * canvas.height);
    const [r, g, b, a] = ctx.getImageData(x, y, 1, 1).data;
    function ColorToHex(color) {
      let hexadecimal = color.toString(16);
      return hexadecimal.length === 1 ? "0" + hexadecimal : hexadecimal;
    }

    function ConvertRGBtoHex(red, green, blue) {
      return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
    }
    const colorValue = ConvertRGBtoHex(r, g, b);
    for (const element of batimentArray.array) {
      if (colorValue === element.color.toLowerCase()) {
        const nameBat = element.name;
        const idColorChecking = element.idColor;
        switch (nameBat) {
          case "mairie":
            batimentCheck = myMairie;
            break;
          case "zehi":
            batimentCheck = myMairie.currentMilitaryBat[idColorChecking - 1];
            break;
          case "militaryBase":
            batimentCheck = myMairie.currentMilitaryBat[idColorChecking - 1];
            break;
          case "goldStorage":
            batimentCheck =
              myMairie.currentNumberGOldStorage[idColorChecking - 1];
            break;
          case "oilStorage":
            batimentCheck =
              myMairie.currentNumberOilStorage[idColorChecking - 1];
            break;
          case "milice":
            batimentCheck = myMairie.currentNumberDefense[idColorChecking - 1];
            break;
          case "cannon":
            batimentCheck = myMairie.currentNumberDefense[idColorChecking -1 ];
            break;
          case "laser":
            batimentCheck = myMairie.currentNumberDefense[idColorChecking - 1];
            break;
          case "goldMine":
            batimentCheck =
              myMairie.currentNumberGOldMining[idColorChecking - 1];
            break;
          case "oilMine":
            batimentCheck =
              myMairie.currentNumberOilMining[idColorChecking - 1];
            break;
          default:
            break;
        }
         currentLvlValue = batimentCheck.level.toString();
        costValue = batimentCheck.ameliorationPrice.toString();
        console.log(currentLvlValue, costValue , nameBat)
      }
    }
  },

  );
}
export default checkColorAtClick;