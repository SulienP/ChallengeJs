
import { CloseButton } from "@mantine/core";
import { useState } from "react"
import "../../../css/uppGradeDiv.css"
// ! Upgrade button
function UpgradeBatiment(props) {
      const [buttonDisplay, buttonDisplaySetState] = useState(false);
      const [closeButtonDisplay , closeButtonDisplaySetState] = useState(true);
  function inverseDisplay() {
    buttonDisplaySetState(!buttonDisplay)
  }
  return (
    <div id="upgrade" className="upgrade" style={{ display: buttonDisplay ? "block" : "none" }}>
      <CloseButton color="red" style={{ display : closeButtonDisplay ? "block" : "block"}} onClick={()=>{ inverseDisplay()}}>
      </CloseButton>
    </div>
  );
}
export default UpgradeBatiment;
