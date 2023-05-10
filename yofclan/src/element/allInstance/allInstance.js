export class Batiment {
  constructor(
    name,
    type,
    id,
    price,
    ameliorationPrice,
    defense,
    typeProductions,
    productionByHour,
    productionMax,
    maxStorage,
    storageType,
    currentStockage,
    level,
    typeAmelioration,
    maxLevel
  ) {
    this.name = name;
    this.type = type;
    this.id = id;
    this.price = price;
    this.ameliorationPrice = ameliorationPrice;
    this.defense = defense;
    this.typeProductions = typeProductions;
    this.productionByHour = productionByHour;
    this.productionMax = productionMax;
    this.maxStorage = maxStorage;
    this.storageType = storageType;
    this.currentStockage = currentStockage;
    this.level = level;
    this.typeAmelioration = typeAmelioration;
    this.maxLevel = maxLevel;
  }
}



export class Mairie {
  constructor(
    name,
    type,
    id,
    nbrMAx,
    defense,
    currentNumber,
    level,
    price,
    ameliorationPrice,
    maxOilMining,
    maxGOldMining,
    maxGOldStorage,
    maxOIlStorage,
    maxDefense,
    currentNumberOilMining,
    currentNumberGOldMining,
    currentNumberGOldStorage,
    currentNumberDefense,
    currentNumberOilStorage,
    maxMilitary,
    currentMilitaryBat,
    currentOil,
    currentGold,
    typeAmelioration
  ) {
    this.name = name;
    this.id = id;
    this.nbrMAx = nbrMAx;
    this.defense = defense;
    this.type = type;
    this.currentNumber = currentNumber;
    this.level = level;
    this.price = price;
    this.ameliorationPrice = ameliorationPrice;
    this.maxOilMining = maxOilMining;
    this.maxGOldMining = maxGOldMining;
    this.maxGOldStorage = maxGOldStorage;
    this.maxOIlStorage = maxOIlStorage;
    this.maxDefense = maxDefense;
    this.currentNumberGOldStorage = currentNumberGOldStorage;
    this.currentNumberDefense = currentNumberDefense;
    this.currentNumberOilMining = currentNumberOilMining;
    this.currentNumberGOldMining = currentNumberGOldMining;
    this.currentNumberOilStorage = currentNumberOilStorage;
    this.maxMilitary = maxMilitary;
    this.currentMilitaryBat = currentMilitaryBat;
    this.currentOil = currentOil;
    this.currentGold = currentGold;
    this.typeAmelioration = typeAmelioration;
  }
}

export class Fighters {
  constructor(
    name,
    type,
    id,
    place,
    attaque,
    defense,
    price,
    currentNumber,
    level,
    ameliorationPrice
  ) {
    this.name = name;
    this.type = type;
        this.id = id;
    this.place = place;
    this.attaque = attaque;
    this.defense = defense;
    this.price = price;
    this.currentNumber = currentNumber;
    this.level = level;
    this.ameliorationPrice = ameliorationPrice;
  }
}


export class BatimentPositionStructure{
  constructor(array) {
    this.array = array;
  }
}

export class BatimentPostion {
  constructor(xAxes, yAxes, size1, size2, color,name, idColor) {
    this.xAxes = xAxes;
    this.yAxes = yAxes;
    this.size1 = size1;
    this.size2 = size2;
    this.color = color;
    this.name = name;
    this.name = idColor;
  }
}