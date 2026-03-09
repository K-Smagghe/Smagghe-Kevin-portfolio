import type React from "react";
import "../EnConstruction/EnConstruction.css";

const UnderConstruction: React.FC = () => {
  return (
    <main className="maintenance-container">
      <div className="maintenance-content">
        <div className="status-badge">Bientôt disponible</div>

        <h1 className="maintenance-title">
          PROJET EN{" "}
          <span className="gradient-text">COURS DE DÉVELOPPEMENT</span>
        </h1>

        <p className="maintenance-description">
          Je peaufine les derniers détails de cette section pour vous offrir la
          meilleure expérience possible. Un peu de patience, le déploiement est
          imminent.
        </p>

        <div className="loader-container">
          <div className="progress-bar">
            <div className="progress-fill" />
          </div>
          <span className="progress-status">Optimisation en cours...</span>
        </div>
      </div>
    </main>
  );
};

export default UnderConstruction;
