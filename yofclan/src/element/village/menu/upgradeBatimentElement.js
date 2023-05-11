
import { CloseButton } from "@mantine/core";
import { useState } from "react"

// ! Upgrade button
function UpgradeBatiment(props) {
      const [buttonDisplay, buttonDisplaySetState] = useState(false);

  function inverseDisplay() {
    buttonDisplaySetState(!buttonDisplay)
  }
  return (
    <div id="upgrade" className="upgrade" style={{ display: buttonDisplay ? "block" : "none" }}>
      <CloseButton style={{ display :"block"}} onClick={()=>{ inverseDisplay()}}>
      </CloseButton>
    </div>
  );
}
export default UpgradeBatiment;
