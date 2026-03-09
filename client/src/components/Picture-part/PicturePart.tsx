import "./PicturePart.css";
import profileImage from "../../assets/images/474826999_29197470013185862_8591616171521464697_n (8).jpg";

function PicturePart() {
  return (
    <div className="profile-card-container">
      <div className="gradient-background" />
      <div className="profile-content">
        <img src={profileImage} alt="Profil" className="profile-image" />
        <div className="status-bubble">
          <span className="status-dot" />
          <div className="status-text">
            <strong>Actuellement</strong>
            <span>Fignole mon portefolio.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PicturePart;
