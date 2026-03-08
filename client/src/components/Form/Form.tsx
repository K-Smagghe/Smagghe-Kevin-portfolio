function Form() {
  return (
    <>
      <h2>Contact</h2>
      <p>
        Vous souhaitez me contacter pour obtenir des informations sur mes
        services ou mes compétences ? Une question technique ou simplement
        l'envie d'échanger sur votre futur projet ? C'est par ici !
      </p>
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
        <input type="textarea" id="Message" required />
        <br />
        <button type="submit">Envoyer mon message</button>
      </form>
    </>
  );
}

export default Form;
