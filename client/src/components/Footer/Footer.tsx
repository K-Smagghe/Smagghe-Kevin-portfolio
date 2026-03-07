import { Github, Linkedin, Mail } from "lucide-react";
import "../Footer/Footer.css";

function Footer() {
  return (
    <footer className="card-container">
      {/* Texte Copyright à gauche (visible uniquement sur PC) */}
      <div className="copyright">
        2026 Smagghe kévin :<br />
        tous droits réservés
      </div>

      <hr className="divider" />

      {/* Section Icônes + Liens */}
      <div className="social-links">
        <a
          href="mailto:kevin.smagghe.pro@gmail.com"
          className="social-item"
          aria-label="Email"
        >
          <Mail size={40} strokeWidth={1.5} />
          <span className="social-text">Kevin.smagghe.pro@gmail.com</span>
        </a>

        <a
          href="https://www.linkedin.com/in/kevin-smagghe-66724a35b/"
          target="_blank"
          rel="noreferrer"
          className="social-item"
          aria-label="LinkedIn"
        >
          <Linkedin size={40} strokeWidth={1.5} />
          <span className="social-text">Linkedin</span>
        </a>

        <a
          href="https://github.com/K-Smagghe"
          target="_blank"
          rel="noreferrer"
          className="social-item"
          aria-label="GitHub"
        >
          <Github size={40} strokeWidth={1.5} />
          <span className="social-text">Github</span>
        </a>
      </div>

      <hr className="divider" />

      {/* Bouton de téléchargement */}
      <div className="download-section">
        <button type="button" className="download-button">
          Télécharger mon CV
        </button>
      </div>
    </footer>
  );
}

export default Footer;
