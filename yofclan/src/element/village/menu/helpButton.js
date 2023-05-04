import { Button, CloseButton } from "@mantine/core";
import React, { useState } from "react";
import "../../../css/help.css"
function HelpButton() {
    const [helpDisplay, helpDisplaySetState] = useState(false);

    function displayHelp() {
        helpDisplaySetState(!helpDisplay)
    }
    return (
      <>
        <Button onClick={displayHelp}>Help</Button>
        <div
          class="help"
          style={{ display: helpDisplay ? "block" : "none"}}
        >
          <CloseButton
            title="Close popover"
            size="xl"
            iconSize={20}
            onClick={displayHelp}
            style={{
              position: "absolute",
              right: "0",
            }}
          />
          Ici sera afficher l'aide
        </div>
      </>
    );
}

export default HelpButton;