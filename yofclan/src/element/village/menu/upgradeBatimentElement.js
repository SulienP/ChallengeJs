
import { CloseButton } from "@mantine/core";
import "../../../css/uppGradeDiv.css"
import GameManager from "../../gameManager/gameManager";
import {useState} from "react"
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
