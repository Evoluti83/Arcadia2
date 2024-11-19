d// === Menu déroulant Connexion ===
const loginButton = document.getElementById('login-button');
const dropdownMenu = document.getElementById('dropdown-menu');

// Ouvrir/fermer le menu déroulant au clic sur Connexion
loginButton.addEventListener('click', function (e) {
    e.preventDefault();
    const dropdown = this.parentElement; // Récupère l'élément parent
    dropdown.classList.toggle('open'); // Ajoute/retire la classe 'open'
});

// Fermer le menu déroulant si on clique ailleurs
document.addEventListener('click', function (e) {
    if (!loginButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
        const dropdown = document.querySelector('.dropdown');
        if (dropdown) {
            dropdown.classList.remove('open'); // Retire la classe 'open'
        }
    }
});

// === Gérer les options du menu déroulant ===
document.querySelectorAll('.login-option').forEach(option => {
    option.addEventListener('click', function (e) {
        e.preventDefault();
        const role = this.getAttribute('data-role');
        alert(`Vous avez choisi : ${role}`); // Exemple d'action
    });
});
