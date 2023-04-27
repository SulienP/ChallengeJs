import { Batiment } from "../allInstance/allInstance";
import { Zehi } from "../allInstance/miltary/zehi.js";
import { Camps } from "../allInstance/miltary/militaryCamp.js";
import { GoldMine } from "../allInstance/mining/gold.js"
import { OILMINE } from "../allInstance/mining/oil.js"
import { GOLDStorage } from "../allInstance/ressource/GOldStorages.js"
import { OilSTORAGE } from "../allInstance/ressource/oilStock.js"
import { Cannon } from "../allInstance/defense/cannon.js";
import { Laser } from "../allInstance/defense/laser.js";
import { Milice } from "../allInstance/defense/milice.js";
import { Banch } from "../allInstance/decoration/banch"
import { Holograme } from "../allInstance/decoration/holograme.js"
import { Pub } from "../allInstance/decoration/pub.js";
import test from "../../element/village/test.js"
import Reload from "./reload.js";
import toLocalStorage from "./toLocalStorage.js";
function buy(value) {
  let element = localStorage.getItem('myMairie')
  const myMairie = JSON.parse(element);
  let newBat = Batiment
  if (value[1] === "military") {
    if (myMairie.currentOil > value[3]) {
      if (myMairie.currentMilitaryBat.length < myMairie.maxMilitary) {
        switch (value[4]) {
          case "zehi":     
          newBat = new Zehi();
          myMairie.currentMilitaryBat.push(newBat);
            myMairie.currentOil = myMairie.currentOil - value[3];
            toLocalStorage(myMairie);
          //Reload()
            test("military");
          return true;
          case "militaryBase":
          newBat = new Camps();  
          myMairie.currentMilitaryBat.push(newBat);
          myMairie.currentOil = myMairie.currentOil - value[3];
          toLocalStorage(myMairie);
          test("military");
          
          //Reload();
          return true;
          default:
          break;
        }  
      }
    } else {
      return false
    }
    
  } else if (value[1] === "ressource") {
    switch (value[4]) {
      case "goldStorage":
      if (myMairie.currentOil > value[3]) {
        if (
          myMairie.currentNumberGOldStorage.length <
          myMairie.maxGOldStorage
          ) {          
            newBat = new GOLDStorage();
            myMairie.currentNumberGOldStorage.push(newBat);
            myMairie.currentOil = myMairie.currentOil - value[3];
            myMairie.maxGoldRessource =myMairie.maxGoldRessource + myMairie.maxGoldRessource;
            toLocalStorage(myMairie);
            test("storage");
            
            Reload();
            return true;
          }
        }
        break;
        case "oilStorage":
        if (myMairie.currentGold > value[3]) {
          if (
            myMairie.currentNumberOilStorage.length < myMairie.maxOIlStorage
            ) {  
              newBat = new OilSTORAGE();
              myMairie.currentNumberOilStorage.push(newBat);
              myMairie.currentGold = myMairie.currentGold - value[3];
              myMairie.maxOIlRessource = myMairie.maxOIlRessource + myMairie.maxOIlRessource;
              toLocalStorage(myMairie);;
              Reload();
              test("storage");
              
              return true;
            }
          }
          break;
          default:
          break;
        }
      } else if (value[1] === "defense") {
        switch (value[4]) {
          case "milice":
          if (myMairie.currentGold > value[3]) {
            if (myMairie.currentNumberDefense.length < myMairie.maxDefense) {
              newBat = new Milice();
              myMairie.currentNumberDefense.push(newBat);
              myMairie.currentGold = myMairie.currentGold - value[3];
              toLocalStorage(myMairie)              ;    
              Reload();
              test("defense");
              
              return true;
            }
          }
          break;
          case "cannon":
          if (myMairie.currentGold > value[3]) {
            if (myMairie.currentNumberDefense.length < myMairie.maxDefense) {
              newBat = new Cannon();
              myMairie.currentNumberDefense.push(newBat);
              myMairie.currentGold = myMairie.currentGold - value[3];
              toLocalStorage(myMairie);
              Reload();
              test("defense");
              
              return true;
            }
          }
          break;
          case "laser":
          if (myMairie.currentGold > value[3]) {
            if (myMairie.currentNumberDefense.length < myMairie.maxDefense) {
              newBat = new Laser();
              myMairie.currentNumberDefense.push(newBat);
              myMairie.currentGold = myMairie.currentGold - value[3];
              toLocalStorage(myMairie);  
              test("defense");
              Reload();
              return true;
            }
          }
          break;
          default:
          break;
        }
      } else if (value[1] === "mining") {
        if (value[2] === "oil") {
          if (value[4] === "goldMine") {
            if (myMairie.currentOil > value[3]) {
              if (
                myMairie.currentNumberGOldMining.length < myMairie.maxGOldMining
                ) {    
                  newBat = new GoldMine();
                  myMairie.currentNumberGOldMining.push(newBat);
                  myMairie.currentOil = myMairie.currentOil - value[3];
                  toLocalStorage(myMairie);
                  Reload();
                  test("mine");
                  
                  return true;
                }
              }
            }
          } else if (value[2] === "or") {
            if (value[4] === "oilMine") {
              if (myMairie.currentGold > value[3]) {
                if (myMairie.currentNumberOilMining.length < myMairie.maxOilMining) {
                  newBat = new OILMINE();
                  myMairie.currentNumberOilMining.push(newBat);
                  myMairie.currentGold = myMairie.currentGold - value[3];
                  toLocalStorage(myMairie);
                  Reload();
                  test("mine");
                  return true;
                }
              }
            }
          }
        } else if (value[1] === "decoration") {
          switch (value[4]) {
            case "hologram":
            if (myMairie.currentOil > value[3]) {
              newBat = new Holograme();
              myMairie.currentOil = myMairie.currentOil - value[3];
              toLocalStorage(myMairie);
              
              Reload();
              test("decoration");
              return true;
            }
            break;
            case "banch":
            if(myMairie.currentOil > value[3]) {
              newBat = new Banch();
              myMairie.currentOil = myMairie.currentOil - value[3];
              toLocalStorage(myMairie);
              
              Reload();
              test("decoration");
              return true;
            }    
            break;
            case "pub ":
            if (myMairie.currentOil > value[3]) {
              newBat = new Pub();
              myMairie.currentOil = myMairie.currentOil - value[3];
              toLocalStorage(myMairie);
              test("decoration");
              Reload();
              return true;
            }
            break;
            default:
            break;
          }
        }
      }    
      export default buy;
