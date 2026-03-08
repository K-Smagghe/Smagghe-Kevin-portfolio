import APropos from "../components/A-propos/A-propos";
import Entete from "../components/Entete/Entete";
import MesTechnos from "../components/Mes-technos/MesTechnos";
import PicturePart from "../components/Picture-part/PicturePart";

function AboutPages() {
  return (
    <>
      <Entete />
      <div className="PictureAndApropos">
        <PicturePart />
        <APropos />
      </div>
      <MesTechnos />
    </>
  );
}

export default AboutPages;
