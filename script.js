function enregistrer() {
  let nom = document.getElementById("nom").value;
  let motif = document.getElementById("motif").value;

  if (nom === "" || motif === "") {
    alert("Veuillez remplir tous les champs");
    return;
  }

  let visiteurs = JSON.parse(localStorage.getItem("visiteurs")) || [];

  let maintenant = new Date();
  let dateHeure = maintenant.toLocaleString();

  visiteurs.push({
    nom: nom,
    motif: motif,
    dateHeure: dateHeure
  });

  localStorage.setItem("visiteurs", JSON.stringify(visiteurs));

  alert("Visiteur enregistré ✅");

  document.getElementById("nom").value = "";
  document.getElementById("motif").value = "";
    }
