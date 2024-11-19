document.getElementById('avis-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const nom = document.getElementById('avis-nom').value;
    const message = document.getElementById('avis-message').value;
    const avisListe = document.getElementById('avis-liste');

    const newAvis = document.createElement('li');
    newAvis.textContent = `${message} – ${nom}`;
    avisListe.appendChild(newAvis);

    document.getElementById('avis-form').reset();
});

// Gérer le menu déroulant
document.getElementById('login-button').addEventListener('click', function (e) {
    e.preventDefault(); // Empêche le comportement par défaut du bouton

    // Récupère le parent du bouton (l'élément contenant la classe 'dropdown')
    const dropdown = this.parentElement;

    // Ajoute ou retire la classe 'open' pour afficher/masquer le menu
    dropdown.classList.toggle('open');
});

// Fermer le menu déroulant lorsqu'on clique ailleurs
document.addEventListener('click', function (e) {
    const dropdown = document.querySelector('.dropdown');

    // Si le clic se produit en dehors du menu déroulant, on le ferme
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
    }
});

// Gérer l'affichage du modal de connexion
document.querySelectorAll('.login-option').forEach(option => {
    option.addEventListener('click', function (e) {
        e.preventDefault(); // Empêche le comportement par défaut du lien

        // Récupère le rôle sélectionné (vétérinaire, employé ou administrateur)
        const role = this.getAttribute('data-role');
        document.getElementById('role').value = role; // Définit le rôle dans le formulaire du modal

        // Affiche le modal
        document.getElementById('login-modal').style.display = 'flex';
    });
});

// Fermer le modal de connexion via le bouton de fermeture
document.querySelector('.modal .close').addEventListener('click', function () {
    document.getElementById('login-modal').style.display = 'none'; // Masque le modal
});

// Fermer le modal en cliquant en dehors de celui-ci
window.addEventListener('click', function (e) {
    const modal = document.getElementById('login-modal');

    // Si le clic se produit en dehors de la fenêtre modale, on la ferme
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Gérer la soumission du formulaire de connexion
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche la soumission réelle du formulaire

    // Récupère les valeurs du formulaire
    const role = document.getElementById('role').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Affiche les données dans la console (remplacez par une requête serveur si nécessaire)
    console.log(`Connexion en tant que ${role}: ${username}/${password}`);

    // Affiche un message de succès (temporaire)
    alert(`Connexion réussie en tant que ${role}`);

    // Ferme le modal après la soumission
    document.getElementById('login-modal').style.display = 'none';
});
