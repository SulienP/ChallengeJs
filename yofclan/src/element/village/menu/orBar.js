import { Progress } from "@mantine/core";
import "../../../css/barProgress.css"

/* 
 ! TODO ajout d'un progression en fonction de ce qu'on a + variable
*/
function goldBar(goldPercent) {
    return <Progress color="yellow" size="lg" radius="xl" label="gold:" value={15} className="barProgess" style={{
        position: 'absolute',
        top: '0',
        right: '0',
        width: '20%',
        height: '20px',
    }}    />;
}
export default goldBar;
