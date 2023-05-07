import draw from "../village/draw";

function drawLastVillage() {
  const canvas = document.querySelector("#myVillage");
  const ctx = canvas.getContext("2d");
  let value = localStorage.getItem("batimentArray");
  let batimentArray = JSON.parse(value);
  let size = batimentArray.array.length;

  if (size === 0) {
    draw("mairie");
    draw("goldStorage");
    draw("oilStorage");
    draw("goldMine");
    draw("oilMine");
  } else {
      canvas.addEventListener("click", function (event) {
        


      }, false);
    };
      for (let i = 0; i < size; i++) {
        ctx.fillStyle = batimentArray.array[i].color;
        ctx.fillRect( 
          batimentArray.array[i].xAxes,
          batimentArray.array[i].yAxes,
          batimentArray.array[i].size1,
          batimentArray.array[i].size2
        );
        console.log("je passe par drawLastVIllage")
      }
    }


export default drawLastVillage;




/*
! A garder 
 const cellSize = 20; 

  for (let x = 0; x < canvas.width; x += cellSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }
  for (let y = 0; y < canvas.height; y += cellSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }
const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  // Déterminer la cellule de la grille correspondante
  const cellX = Math.floor(x / cellSize);
  const cellY = Math.floor(y / cellSize);

for (const element of batimentArray.array) {
  // Récupération des coordonnées du dessin
  const drawX = element.xAxes;
  const drawY = element.yAxes;

  // Sauvegarde du contexte du canvas
  ctx.save();

  // Début du tracé
  ctx.beginPath();

  // Dessin du dessin en cours de vérification
  ctx.rect(
    drawX,
    drawY,
    element.size1,
    element.size2
  );

  // Vérification si les coordonnées de la cellule se trouvent dans le dessin
  const isInside = ctx.isPointInPath(cellX, cellY);

  // Restauration du contexte du canvas
  ctx.restore();

  // Si le dessin se trouve dans la cellule
  if (isInside) {
    // Mettre à jour le stockage local ou effectuer d'autres traitements
    console.log("Le dessin se trouve dans la cellule");
    console.log(`Cellule : (${cellX}, ${cellY})`);
    console.log(`Dessin : (${drawX}, ${drawY})`);
  }
}
*/