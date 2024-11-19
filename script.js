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
