import "../../../css/card.css";
import { Button } from "@mantine/core";
import React, { useState } from "react";
import GameManager from "../../gameManager/gameManager";

//! shop display with reversment of the display
function Card() {
  let colorValue = "indigo"
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
      <div class="Card">
        <div className="container">
          <Button
            variant="gradient"
            gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
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
                  color={colorValue}
                  onClick={() =>
                    sendBuy(["buy", "military", "oil", 120, "zehi"])
                  }
                >
                  ZEHI: 120 oil
                </Button>
                <Button
                  variant="gradient"
                  color={colorValue}
                  onClick={() =>
                    sendBuy(["buy", "military", "oil", 150, "militaryBase"])
                  }
                >
                  MilitaryBase 150 Oil
                </Button>
              </Button.Group>
            </div>
          </div>
          <Button
            variant="gradient"
            gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
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
                  color={colorValue}
                  onClick={() =>
                    sendBuy(["buy", "ressource", "oil", 530, "goldStorage"])
                  }
                >
                  Gold Storage 530 oil
                </Button>
                <Button
                  variant="gradient"
                  color={colorValue}
                  onClick={() =>
                    sendBuy(["buy", "ressource", "gold", 530, "oilStorage"])
                  }
                >
                  Oil Storage 530 gold
                </Button>
              </Button.Group>
            </div>
          </div>
          <Button
            variant="gradient"
            gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
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
                  color={colorValue}
                  onClick={() =>
                    sendBuy(["buy", "defense", "gold", 200, "milice"])
                  }
                >
                  Milice 200 Gold
                </Button>
                <Button
                  variant="gradient"
                  color={colorValue}
                  onClick={() =>
                    sendBuy(["buy", "defense", "gold", 190, "cannon"])
                  }
                >
                  Cannon 190 Gold
                </Button>
                <Button
                  variant="gradient"
                  color={colorValue}
                  onClick={() =>
                    sendBuy(["buy", "defense", "gold", 160, "laser"])
                  }
                >
                  Laser 160 Gold
                </Button>
              </Button.Group>
            </div>
          </div>
          <Button
            variant="gradient"
            gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
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
                  color={colorValue}
                  onClick={() =>
                    sendBuy(["buy", "mining", "oil", 150, "goldMine"])
                  }
                >
                  Gold Mine 150 Oil
                </Button>
                <Button
                  variant="gradient"
                  color={colorValue}
                  onClick={() =>
                    sendBuy(["buy", "mining", "or", 150, "oilMine"])
                  }
                >
                  Oil mine 150 Gold
                </Button>
              </Button.Group>
            </div>
          </div>
          <Button
            variant="gradient"
            gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
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
                  color={colorValue}
                  onClick={() =>
                    sendBuy(["buy", "decoration", "oil", 0, "hologram"])
                  }
                >
                  Hologram 150 Oil
                </Button>
                <Button
                  variant="gradient"
                  color={colorValue}
                  onClick={() =>
                    sendBuy(["buy", "decoration", "oil", 0, "banch"])
                  }
                >
                  Banch 150 Oil
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
  
