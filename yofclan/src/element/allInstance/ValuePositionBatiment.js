import { BatimentPostion } from "./allInstance";

export class ValuePositionBatiment extends BatimentPostion {
  constructor(xAxes, yAxes, size1, size2, color, idColor) {
      super(xAxes, yAxes, size1, size2, color, idColor);
      this.xAxes = xAxes;
      this.yAxes = yAxes;
      this.size1 = size1;
      this.size2 = size2;
      this.color = color;
      this.idColor = idColor;
  }
} 