import '../../css/index.css'
import gameManager from "../gameManager/gameManager.js";
/*
  TODO: Déplacement des batiments 
*/

  function Village() {
  
 
    return (
      <div className="village">
        <canvas id="myVillage" height="170" width="260" style={{
          margin: '15%',
        }} >
        </canvas>
      </div>
    );
  }


export default Village;