import "../../../css/card.css";
import { Button } from "@mantine/core";
import buy from "../../gameManager/buy.js"
import React, { useState } from "react";
import GameManager from "../../gameManager/gameManager";
function Card() {
    const [buttonDisplay , buttonDisplaySetState] = useState(true)
    const [militaryState, militarySetState] = useState(false);
    const [ressourceState, ressourceSetState] = useState(false);
    const [defenseState, defenseSetState] = useState(false);
    const [miningState, miningSetState] = useState(false);
    const [decorationState, decorationSetState] = useState(false);
    const [internButtonState, internButtonSetState] = useState(false);
    function inverseDisplay(element) {
        switch (element) {
          case "military":
            buttonDisplaySetState(!buttonDisplay);
            militarySetState(!militaryState);
            internButtonSetState(!internButtonState);
            break;
          case "defense":
            buttonDisplaySetState(!buttonDisplay);
            defenseSetState(!defenseState);
            internButtonSetState(!internButtonState);
            break;
          case "mining":
            buttonDisplaySetState(!buttonDisplay);
            miningSetState(!miningState);
            internButtonSetState(!internButtonState);
            break;
          case "ressource":
              buttonDisplaySetState(!buttonDisplay);
              ressourceSetState(!ressourceState);
              internButtonSetState(!internButtonState);;
            break;
          case "decoration":
               buttonDisplaySetState(!buttonDisplay);
               decorationSetState(!decorationState);
               internButtonSetState(!internButtonState);
                break
            default:
                
                break;
        }
       
  }     
  return (
    <>
      <div className="card">
        <div className="container">
          <Button
            variant="gradient"
            gradient={{ from: "teal", to: "lime", deg: 105 }}
            onClick={() => {
              inverseDisplay("military");
            }}
            style={{ display: buttonDisplay ? "block" : "none" }}
          >
            Military
          </Button>
          <div
            id="content"
            style={{ display: militaryState ? "block" : "none" }}
          >
            <div className="all">
              <Button.Group
                orientation="vertical"
                onClick={() => {
                  inverseDisplay("military");
                }}
              >
                <Button
                  $
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan", deg: 105 }}
                  onClick={() => sendBuy(["buy", "military", "oil", 150, "zehi"])}
                >
                  ZEHI: XXXoil
                </Button>
                <Button
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                  onClick={() =>
                    sendBuy(["buy", "military", "oil", 150, "militaryBase"])
                  }
                >
                  MilitaryBase XXXXor XXX oil
                </Button>
              </Button.Group>
            </div>
          </div>
          <Button
            variant="gradient"
            gradient={{ from: "teal", to: "lime", deg: 105 }}
            onClick={() => {
              inverseDisplay("ressource");
            }}
            style={{ display: buttonDisplay ? "block" : "none" }}
          >
            Ressource
          </Button>
          <div
            id="content"
            style={{ display: ressourceState ? "block" : "none" }}
          >
            <div className="all">
              <Button.Group
                orientation="vertical"
                onClick={() => {
                  inverseDisplay("ressource");
                }}
              >
                <Button
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                  onClick={() =>
                    sendBuy(["buy", "ressource", "oil", 150, "goldStorage"])
                  }
                >
                  Gold Storage 110 oil
                </Button>
                <Button
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                  onClick={() =>
                    sendBuy(["buy", "ressource", "gold", 150, "oilStorage"])
                  }
                >
                  Oil Storage 100 or
                </Button>
              </Button.Group>
            </div>
          </div>
          <Button
            variant="gradient"
            gradient={{ from: "teal", to: "lime", deg: 105 }}
            onClick={() => {
              inverseDisplay("defense");
            }}
            style={{ display: buttonDisplay ? "block" : "none" }}
          >
            Defense
          </Button>
          <div style={{ display: defenseState ? "block" : "none" }}>
            <div className="all">
              <Button.Group
                orientation="vertical"
                onClick={() => {
                  inverseDisplay("defense");
                }}
              >
                <Button
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                  onClick={() => sendBuy(["buy", "defense", "or", 150, "milice"])}
                >
                  Milice XXXX
                </Button>
                <Button
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                  onClick={() => sendBuy(["buy", "defense", "or", 150, "cannon"])}
                >
                  Cannon XXXXX
                </Button>
                <Button
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                  onClick={() => sendBuy(["buy", "defense", "or", 150, "laser"])}
                >
                  Laser XXXX
                </Button>
              </Button.Group>
            </div>
          </div>
          <Button
            variant="gradient"
            gradient={{ from: "teal", to: "lime", deg: 105 }}
            onClick={() => {
              inverseDisplay("mining");
            }}
            style={{ display: buttonDisplay ? "block" : "none" }}
          >
            Mining
          </Button>
          <div id="content" style={{ display: miningState ? "block" : "none" }}>
            <div className="all">
              <Button.Group
                orientation="vertical"
                onClick={() => {
                  inverseDisplay("mining");
                }}
              >
                <Button
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                  onClick={() =>
                    sendBuy(["buy", "mining", "oil", 150, "goldMine"])
                  }
                >
                  Mine XXXX
                </Button>
                <Button
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                  onClick={() => sendBuy(["buy", "mining", "or", 150, "oilMine"])}
                >
                  Oil mine XXXX
                </Button>
              </Button.Group>
            </div>
          </div>
          <Button
            variant="gradient"
            gradient={{ from: "teal", to: "lime", deg: 105 }}
            onClick={() => {
              inverseDisplay("decoration");
            }}
            style={{ display: buttonDisplay ? "block" : "none" }}
          >
            Decoration
          </Button>
          <div
            id="content"
            style={{ display: decorationState ? "block" : "none" }}
          >
            <div className="all">
              <Button.Group
                orientation="vertical"
                onClick={() => {
                  inverseDisplay("decoration");
                }}
              >
                <Button
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                  onClick={() =>
                    sendBuy(["buy", "decoration", "oil", 150, "hologram"])
                  }
                >
                  Hologram xxxx
                </Button>
                <Button
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                  onClick={() =>
                    sendBuy(["buy", "decoration", "oil", 150, "banch"])
                  }
                >
                  Banch XXXX
                </Button>
                <Button
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                  onClick={() => sendBuy(["buy", "decoration", "oil", 150, "pub"])}
                >
                  Pub XXXX
                </Button>
              </Button.Group>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function sendBuy(value) {
  GameManager(value)
}

export default Card;

