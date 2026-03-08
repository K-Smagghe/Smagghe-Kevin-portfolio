import "../Form/Form.css";

function Form() {
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
      <form action="" method="post">
        <label htmlFor="Nom">Nom</label>
        <input type="text" id="Nom" required />
        <br />
        <label htmlFor="Prenom">Prénom</label>
        <input type="text" id="Prenom" required />
        <br />
        <label htmlFor="Email">Email</label>
        <input type="email" id="Email" required />
        <br />
        <label htmlFor="Message">Votre message</label>
        <textarea id="Message" required />
        <button type="submit">Envoyer mon message</button>
      </form>
    </>
  );
}

export default Form;
