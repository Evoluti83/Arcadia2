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
