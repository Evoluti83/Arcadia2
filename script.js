// === Gérer le menu déroulant "Connexion" ===
document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('login-button');
    const dropdown = document.querySelector('.dropdown');

    // Vérifie que les éléments nécessaires existent
    if (loginButton && dropdown) {
        // Afficher/masquer le menu au clic sur le bouton
        loginButton.addEventListener('click', function (e) {
            e.preventDefault(); // Empêche le comportement par défaut du bouton
            dropdown.classList.toggle('open'); // Ajoute/retire la classe 'open'
        });

        // Fermer le menu déroulant si on clique ailleurs
        document.addEventListener('click', function (e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('open'); // Retire la classe 'open'
            }
        });
    } else {
        console.error('Élément(s) manquant(s) : Vérifiez que #login-button et .dropdown existent.');
    }
});