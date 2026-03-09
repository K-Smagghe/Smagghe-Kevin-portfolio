import { useState } from "react";
import "../Form/Form.css";

function Form() {
  const [nom, Setnom] = useState("");
  const [prenom, SetPrenom] = useState("");
  const [email, SetEmail] = useState("");
  const [message, SetMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = { nom, prenom, email, message };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/message`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (response.ok) {
        alert("Message envoyé !");
        Setnom("");
        SetPrenom("");
        SetEmail("");
        SetMessage("");
      }
    } catch (error) {
      console.error("Erreur :", error);
    }
  };

  return (
    <>
      <div className="HautContact">
        <h2 className="h2Contact">CONTACT</h2>
        <p className="pContact">
          Vous souhaitez me contacter pour obtenir des informations sur mes
          services ou mes compétences ? Une question technique ou simplement
          l'envie d'échanger sur votre futur projet ? C'est par ici !
        </p>
      </div>
      <form action="" method="post" onSubmit={handleSubmit}>
        <label htmlFor="Nom">Nom</label>
        <input
          type="text"
          id="Nom"
          required
          value={nom}
          onChange={(e) => Setnom(e.target.value)}
        />
        <br />
        <label htmlFor="Prenom">Prénom</label>
        <input
          type="text"
          id="Prenom"
          required
          value={prenom}
          onChange={(e) => SetPrenom(e.target.value)}
        />
        <br />
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          id="Email"
          required
          value={email}
          onChange={(e) => SetEmail(e.target.value)}
        />
        <br />
        <label htmlFor="Message">Votre message</label>
        <textarea
          id="Message"
          required
          value={message}
          onChange={(e) => SetMessage(e.target.value)}
        />
        <button type="submit">Envoyer mon message</button>
      </form>
    </>
  );
}

export default Form;
