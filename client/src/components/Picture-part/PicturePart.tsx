import "./PicturePart.css";
import profileImage from "../../assets/images/299202256_8634557109903787_654672307954254383_n (1).jpg";

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
            <span>Je cherche mon prochain projet.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PicturePart;
