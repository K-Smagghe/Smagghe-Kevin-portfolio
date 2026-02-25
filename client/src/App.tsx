import "./App.css";
import APropos from "./components/A-propos/A-propos";
import Entete from "./components/Entete/Entete";
import Navbar from "./components/Navbar/Navbar";
import PicturePart from "./components/Picture-part/PicturePart";

function App() {
  return (
    <>
      <Navbar />
      <Entete />
      <PicturePart />
      <APropos />
    </>
  );
}

export default App;
