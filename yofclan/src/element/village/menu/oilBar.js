import { Progress } from "@mantine/core";
import "../../../css/barProgress.css";

/* 
 ! TODO ajout d'un progression en fonction d'une valeur
*/
function oilBar() {
  return (
    <Progress
      color="indigo"
      radius="xl"
      label="oil:"
      size="lg"
          value={15}
          style={{
        position: 'absolute',
        top: '20px',
        right: '0',
        width: '20%',
        height: '20px',
    }}    />
  );
}
export default oilBar;
