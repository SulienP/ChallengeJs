import './App.css';
import Shop from "../src/element/village/menu/shop.js";
import Village from '../src/element/village/village.js';
import OilBar from '../src/element/village/menu/oilBar.js'
import OrBar from "../src/element/village/menu/orBar.js";

function App() {
  return (
    <>
      <headear>
        <OrBar></OrBar>
      </headear>
      <OilBar></OilBar>
      <Village></Village>
      <Shop></Shop>
    </>
  );
}
/*

  */
export default App;
