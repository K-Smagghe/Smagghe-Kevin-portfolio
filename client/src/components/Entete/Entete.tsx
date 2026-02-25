import { useEffect, useState } from "react";
import "../Entete/Entete.css";

const Entete: React.FC = () => {
  const competences: string[] = [
    "# Développeur web",
    "# Développeur web mobile",
    "# Fana de la tech",
    "# Chargé de recouvrement amiable",
    "# Chargé de recouvrement judiciaire",
    "# Chargé de clientèle",
    "# Curieux de nature",
    "# Force de proposition",
  ];

  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % competences.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Entete">
      <h3>
        <span>JE SUIS BEAUCOUP </span>
        <span>DE CHOSES !</span>
      </h3>

      <div className="Mobile-Carousel">
        <p key={index} className="fade-text">
          {competences[index]}
        </p>
      </div>

      <div className="Entete-Bloc">
        <ul>
          <li># Développeur web</li>
          <li># Développeur web mobile</li>
          <li># Fana de la tech</li>
        </ul>
        <ul>
          <li># Chargé de recouvrement amiable</li>
          <li># Chargé de recouvrement judiciaire</li>
          <li># Chargé de clientèle</li>
        </ul>
        <ul>
          <li># Curieux de nature</li>
          <li># Force de proposition</li>
        </ul>
      </div>
    </div>
  );
};

export default Entete;
