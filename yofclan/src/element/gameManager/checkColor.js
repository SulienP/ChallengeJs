import AddRessource from "./addRessource";
import GameManager from "./gameManager";
// !Otherwise we return error messages and check the color
function checkColorAtClick() {
  // *Recuperation of my batiment
  let value = localStorage.getItem("batimentArray");
  let batimentArray = JSON.parse(value);
  //* Recuperation of my canvas
  let canvas = document.querySelector("#myVillage");
  let ctx = canvas.getContext("2d");
  //* Recuperation of mmy village elemet
  let element = localStorage.getItem("myMairie");
  let myMairie = JSON.parse(element);
  let batimentCheck = "";
  let costValue = "";
  let currentLvlValue = ""; 

  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  //* setting a stop value
  gradient.addColorStop(0, "red");
  gradient.addColorStop(1, "blue");
  canvas.addEventListener("click", function (event) {
    // *Retrieval of click coordinates
    const bb = canvas.getBoundingClientRect();
    const x = Math.floor(((event.clientX - bb.left) / bb.width) * canvas.width);
    const y = Math.floor(
      ((event.clientY - bb.top) / bb.height) * canvas.height
    );
    const [r, g, b] = ctx.getImageData(x, y, 1, 1).data;

    //* Conversion of the color at the position of the click in hexadecimal
    function ColorToHex(color) {
      let hexadecimal = color.toString(16);
      return hexadecimal.length === 1 ? "0" + hexadecimal : hexadecimal;
    }

    function ConvertRGBtoHex(red, green, blue) {
      return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
    }
    const colorValue = ConvertRGBtoHex(r, g, b);

    //*Verification if the color corresponds to a building and recovery of its id and different values ​​to display
    for (const element of batimentArray.array) {
      if (colorValue === element.color.toLowerCase()) {
        const nameBat = element.name;
        const idColorChecking = element.idColor;
        switch (nameBat) {
          case "mairie":
            batimentCheck = myMairie;
            currentLvlValue = batimentCheck.level.toString();
            costValue = batimentCheck.ameliorationPrice.toString();
            break;
          case "zehi":
            batimentCheck = myMairie.currentMilitaryBat[idColorChecking - 1];
            currentLvlValue = batimentCheck.level.toString();
            costValue = batimentCheck.ameliorationPrice.toString();
            break;
          case "militaryBase":
            batimentCheck = myMairie.currentMilitaryBat[idColorChecking - 1];
            currentLvlValue = batimentCheck.level.toString();
            costValue = batimentCheck.ameliorationPrice.toString();
            break;
          case "goldStorage":
            batimentCheck =
              myMairie.currentNumberGOldStorage[idColorChecking - 1];
            currentLvlValue = batimentCheck.level.toString();
            costValue = batimentCheck.ameliorationPrice.toString();
            break;
          case "oilStorage":
            batimentCheck =
              myMairie.currentNumberOilStorage[idColorChecking - 1];
            currentLvlValue = batimentCheck.level.toString();
            costValue = batimentCheck.ameliorationPrice.toString();
            break;
          case "milice":
            batimentCheck = myMairie.currentNumberDefense[idColorChecking - 1];
            currentLvlValue = batimentCheck.level.toString();
            costValue = batimentCheck.ameliorationPrice.toString();
            break;
          case "cannon":
            batimentCheck = myMairie.currentNumberDefense[idColorChecking - 1];
            currentLvlValue = batimentCheck.level.toString();
            costValue = batimentCheck.ameliorationPrice.toString();
            break;
          case "laser":
            batimentCheck = myMairie.currentNumberDefense[idColorChecking - 1];
            currentLvlValue = batimentCheck.level.toString();
            costValue = batimentCheck.ameliorationPrice.toString();
            break;
          case "goldMine":
            batimentCheck =
              myMairie.currentNumberGOldMining[idColorChecking - 1];
            currentLvlValue = batimentCheck.level.toString();
            costValue = batimentCheck.ameliorationPrice.toString();
            break;
          case "oilMine":
            batimentCheck =
              myMairie.currentNumberOilMining[idColorChecking - 1];
            currentLvlValue = batimentCheck.level.toString();
            costValue = batimentCheck.ameliorationPrice.toString();
            break;
          case "hologram":
            currentLvlValue = 0;
            costValue = 0;
            break;
          case "banch":
            currentLvlValue = 0;
            costValue = 0;
            break;
          default:
            break;
        }
        //*Retrieving and modifying a div
        const elementStyle = document.querySelector("#upgrade");
        elementStyle.style.display = "block";

        const button = document.createElement("button");
        button.innerText = costValue;
        //* Call from the game manager
        button.addEventListener("click", () => {
          GameManager(["upgrade", batimentCheck, idColorChecking - 1, nameBat]);
        });

        const texte = document.createTextNode(
          `  ${nameBat}  current level ${currentLvlValue} amelioration price: `
        );
         //* Adding values ​​to display the display of my div
        elementStyle.appendChild(texte);
        elementStyle.appendChild(button);
        console.log(nameBat)
        if (nameBat === "goldMine" || nameBat === "oilMine") {
          console.log("ici")
          const buttonAddRessource = document.createElement("button");
          buttonAddRessource.innerText = "add ressource";
               buttonAddRessource.addEventListener("click", () => {
                 AddRessource();
               });
                           elementStyle.appendChild(buttonAddRessource);

        }
        break;
      }
    }
  },
  
  );
  
}
export default checkColorAtClick;