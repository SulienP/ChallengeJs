import { Button, CloseButton } from "@mantine/core";
import React, { useState } from "react";
import "../../../css/help.css"
 // !Help page
function HelpButton() {
  const [helpDisplay, helpDisplaySetState] = useState(false);

    function displayHelp() {
        helpDisplaySetState(!helpDisplay)
    }
  return (
    <>
      <Button onClick={displayHelp}>Help</Button>
      <div class="help" style={{ display: helpDisplay ? "block" : "none" }}>
        <CloseButton
          size="xl"
          iconSize={20}
          onClick={ () => {displayHelp()}}
          style={{ position: "absolute", right: "0" }}
          color="red"
        />
        <div id="titleHelp">You need some help?</div>
        <hr></hr>
        <div id="colorFF9700"></div>
        <p> : This represents the mairie and cost nothing </p>
        <div id="color2C29FF"></div>
        <p>
          {" "}
          : This represents the zehi (Zone d'entrainement à haute entisté) and
          cost 120 oil and have for defense 10 .
        </p>
        <div id="color0400FF"></div>
        <p> : This is the MilitaryBase and cost 125 and have for defnese 10</p>
        <div id="colorFCC42E"></div>
        <p> : This represents the gold Storage and cost 530 oil.</p>
        <div id="colorFFCF4D"></div>
        <p> : This represents the oil Storage and cost 530 gold</p>
        <div id="colorFF0000"></div>
        <p>
          {" "}
          : This represents the milice and have for defense 150 and cost 200
          gold.
        </p>
        <div id="colorD50000"></div>
        <p>
          {" "}
          : This represents the cannon and have for defense 230 and cost 190
          gold.
        </p>
        <div id="colorA70000"></div>
        <p>
          {" "}
          : This represents the laser and have for defense 130 and cost 160
          gold.
        </p>
        <div id="color00A726"></div>
        <p> : This represents the gold mine and cost 150 oil. </p>
        <div id="color007019"></div>
        <p> : This represents the oil mine and cost 150 gold.</p>
        <div id="colorB603A6"></div>
        <p> : This represents the hologram and cost nothing.</p>
        <div id="colorFA00E3"></div>
        <p> : This represents the banch and cost nothing</p>
        <hr></hr>
        <div id="titleHelp">Production Help ?</div>
        <div id="helpTexte">
          <p>
            The resource production depends on the time spent between two
            connections. The total max production capacity is 1000 at the
            beginning and can be improved with the improvement of storage and
            the town hall.
          </p>
        </div>
        <hr></hr>
        <div id="titleHelp"> Help fight?</div>
        <div id="helpTexte">
          <p>
            The combat system works as follows: The sum total of troop attacks
            is recovered. A random number is drawn based on your attack ability.
            30% chance to lose, 20 to tie, 50% to win In case of victory a
            resource bonus will be provided to you. A certain number of your
            soldiers will die.
          </p>
        </div>
        <hr></hr>
        <div id="titleHelp">Defense hepl</div>
        <div id="helpTexte">
          <p>
            An attack may be made on your connection. The sum total of your
            defense is taken and will work on the same principle However no
            bonus is earned. In case of defeat a malsus is carried out.
            Attention, if you reload the page, a risk of attack is not excluded.
          </p>
        </div>
      </div>
    </>
  );
}

export default HelpButton;
