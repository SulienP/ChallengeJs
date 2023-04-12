export class Decoration{
    constructor(name, type, id, ameliorationPrice) {
        this.name = name
        this.type = type
      this.id = id
      this.ameliorationPrice= ameliorationPrice
    }
}

export class GoldMining {
  constructor(
    name,
    type,
    id,
    productions,
    productsMax,
    level,
    ameliorationPrice,
  ) {
    this.name = name;
    this.type = type;
    this.id = id;
    this.productions = productions;
    this.productionsMax = productsMax;
    this.level = level;
    this.ameliorationPrice =ameliorationPrice;
  }
}
export class OilMining {
  constructor(
    name,
    type,
    id,
    productions,
    productsMax,
    level,
    ameliorationPrice,
  ) {
    this.name = name;
    this.type = type;
    this.id = id;
    this.productions = productions;
    this.productionsMax = productsMax;
    this.level = level;
    this.ameliorationPrice = ameliorationPrice;
  }
}

export class GoldStorage {
  constructor(
    name,
    type,
    id,
    stockageMax,
    level,
    ameliorationPrice
  ) {
    this.name = name;
    this.type = type;
    this.id = id;
    this.stockageMax = stockageMax;
    this.level = level;
    this.ameliorationPrice = ameliorationPrice;
  }
}
export class OilStorage {
  constructor(
    name,
    type,
    id,
    stockageMax,
    level,
    ameliorationPrice
  ) {
    this.name = name;
    this.type = type;
    this.id = id;
    this.stockageMax = stockageMax;
    this.level = level;
    this.ameliorationPrie = ameliorationPrice;
  }
}
export class Defense {
  constructor(
    name,
    type,
    id,
    defense,
    level,
    ameliorationPrice
  ) {
    this.name = name;
    this.type = type;
    this.id = id;
    this.defense = defense;
    this.level = level;
    this.ameliorationPrice = ameliorationPrice;
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
    currentMilitaryBat
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
  }
}
export class Military {
  constructor(
    name,
    type,
    id,
    defense,
    place,
    level,
    ameliorationPrice
  ) {
    this.name = name;
        this.type = type;
    this.id = id;
    this.defense = defense;
    this.place = place;
    this.level = level;
    this.ameliorationPrice = ameliorationPrice;
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
/*
  ! Instance mairie, nbr max batiment par type , nom, max stock mine /oil, nbr max qtt
  ! Instance militaire , nbr de place, nbr de bat , nom ,type
  ! Instance soldat, place prise, nom, vie , attaque ,déffense
  ! Instance défense, def, attaque , place prise 
  ! Instance mine oil , nbr bat , type, nom, prod ,prod max 
  ! Instance déco, nom type
  ! Instance stockage , nom,type
*/