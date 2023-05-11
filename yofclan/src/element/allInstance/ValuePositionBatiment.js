import { BatimentPostion } from "./allInstance";
/*
 * Initialisation of one batiment class 
 */
export class ValuePositionBatiment extends BatimentPostion {
  constructor(xAxes, yAxes, size1, size2, color,name, idColor) {
      super(xAxes, yAxes, size1, size2, color, idColor);
      this.xAxes = xAxes;
      this.yAxes = yAxes;
      this.size1 = size1;
      this.size2 = size2;
      this.color = color;
      this.name = name;
      this.idColor = idColor;
  }
} 