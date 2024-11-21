<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

session_start();

// Liste des utilisateurs valides (idéalement, à remplacer par une base de données)
$users = [
    'veterinaire' => ['username' => 'vet', 'password' => '1234', 'redirect' => 'dashboard-veterinaire.php'],
    'employe' => ['username' => 'emp', 'password' => '5678', 'redirect' => 'dashboard-employe.php'],
    'administrateur' => ['username' => 'admin', 'password' => 'admin', 'redirect' => 'dashboard-admin.php']
];

// Récupération des données du formulaire
$role = $_POST['role'] ?? null;
$username = $_POST['username'] ?? null;
$password = $_POST['password'] ?? null;

if (isset($users[$role]) && $users[$role]['username'] === $username && $users[$role]['password'] === $password) {
    // Stocker les informations dans la session
$_SESSION['user_role'] = $role;
   $_SESSION['username'] = $username;

   if (isset($users[$role]) && $users[$role]['username'] === $username && $users[$role]['password'] === $password) {
    echo "Connexion réussie. Redirection vers : " . $users[$role]['redirect'];
    exit; // Arrêtez l'exécution temporairement pour vérifier
}

    // Redirection vers le tableau de bord approprié
header('Location: ' . $users[$role]['redirect']);
exit;
} else {
    // Retour à la page précédente avec une erreur
$_SESSION['error'] = 'Identifiant ou mot de passe incorrect';
header('Location: index.html?error=1');
exit;
}
?>

<?php
session_start();

// Vérification de l'accès
if (!isset($_SESSION['user_role']) || $_SESSION['user_role'] !== 'veterinaire') {
    header('Location: http://localhost/dashboard-veterinaire.php');
    exit;
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Tableau de Bord - Vétérinaire</title>
</head>
<body>
    <h1>Bienvenue <?php echo htmlspecialchars($_SESSION['username']); ?> (Vétérinaire)</h1>
    <a href="logout.php">Déconnexion</a>
</body>
</html>