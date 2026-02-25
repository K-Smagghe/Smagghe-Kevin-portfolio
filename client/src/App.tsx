import "./App.css";
import Footer from "./Footer/footer";
import APropos from "./components/A-propos/A-propos";
import Entete from "./components/Entete/Entete";
import MesTechnos from "./components/Mes-technos/MesTechnos";
import Navbar from "./components/Navbar/Navbar";
import PicturePart from "./components/Picture-part/PicturePart";

function App() {
  return (
    <>
      <Navbar />
      <Entete />
      <div className="PictureAndApropos">
        <PicturePart />
        <APropos />
      </div>
      <MesTechnos />
      <Footer />
    </>
  );
}

export default App;
