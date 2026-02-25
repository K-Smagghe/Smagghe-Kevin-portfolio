import { Github, Linkedin, Mail } from "lucide-react";
import "../Footer/Footer.css";

function Footer() {
  return (
    <div className="card-container">
      <div className="download-section">
        <button type="submit" className="download-button">
          Télécharger mon CV
        </button>
      </div>

      <hr className="divider" />

      <div className="social-links">
        <a href="kevin.smagghe.dev@gmail.com" aria-label="Email">
          <Mail size={48} strokeWidth={1.5} />
        </a>
        <a
          href="https://www.linkedin.com/in/kevin-smagghe-66724a35b/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={48} strokeWidth={1.5} />
        </a>
        <a
          href="https://github.com/K-Smagghe"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <Github size={48} strokeWidth={1.5} />
        </a>
      </div>

      <hr className="divider" />
    </div>
  );
}

export default Footer;
