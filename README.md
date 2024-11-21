# Arcadia2
# Déployer le site Arcadia en local

## Pré-requis
Avant de commencer, assurez-vous d'avoir installé les outils suivants :
- [XAMPP](https://www.apachefriends.org/) (Recommandé pour PHP et MySQL)
- Un éditeur de texte ou de code comme [Visual Studio Code](https://code.visualstudio.com/)
- Un navigateur web (Chrome, Firefox, etc.)

---

## Étape 1 : Préparer les fichiers du site
1. Assurez-vous d'avoir les fichiers de votre site bien organisés. Voici une structure d'exemple :
    ```
    /arcadia
        ├── index.html
        ├── habitats.html
        ├── services.html
        ├── styles.css
        ├── script.js
        ├── auth.php
        ├── images/
        └── dashboards/
            ├── dashboard-veterinaire.php
            ├── dashboard-employe.php
            ├── dashboard-admin.php
    ```

2. Si votre site utilise une base de données, assurez-vous d'avoir un fichier SQL contenant les données nécessaires (par exemple, `arcadia.sql`).

---

## Étape 2 : Installer XAMPP
1. Téléchargez et installez XAMPP à partir du site officiel : [https://www.apachefriends.org/](https://www.apachefriends.org/).
2. Lancez le panneau de contrôle XAMPP et démarrez les services **Apache** et **MySQL**.

---

## Étape 3 : Déplacer les fichiers du site
1. Copiez le dossier `arcadia` dans le répertoire `htdocs` de XAMPP :
    - Sur Windows : `C:\\xampp\\htdocs\\arcadia`
    - Sur macOS : `/Applications/XAMPP/htdocs/arcadia`

2. Une fois les fichiers copiés, vous pouvez accéder au site via l'URL suivante :
    ```
    http://localhost/arcadia/
    ```

---

## Étape 4 : Configurer la base de données
1. Accédez à **phpMyAdmin** en visitant [http://localhost/phpmyadmin/](http://localhost/phpmyadmin/).
2. Créez une nouvelle base de données appelée `arcadia` :
    - Cliquez sur "Nouvelle base de données".
    - Donnez-lui le nom `arcadia` et cliquez sur "Créer".
3. Importez les données :
    - Cliquez sur l'onglet **Importer**.
    - Sélectionnez le fichier SQL (par exemple, `arcadia.sql`) et cliquez sur "Exécuter".

---

## Étape 5 : Tester le site
1. Accédez au site en visitant [http://localhost/arcadia/](http://localhost/arcadia/).
2. Testez les fonctionnalités suivantes :
    - Navigation entre les pages (Accueil, Habitats, Services).
    - Formulaire de connexion pour les vétérinaires, employés et administrateurs.
    - Interaction avec les animaux (modals).
3. Si vous utilisez PHP, vérifiez que les scripts côté serveur fonctionnent correctement.

---

## Étape 6 : Debugging et optimisation
1. **Afficher les erreurs PHP** :
    Si des fonctionnalités ne marchent pas, activez l'affichage des erreurs PHP :
    ```php
    ini_set('display_errors', 1);
    error_reporting(E_ALL);
    ```

2. **Vérifiez les chemins** :
    Assurez-vous que tous les chemins vers les fichiers CSS, JS, et images sont corrects.

---

## Résultat
Votre site Arcadia est maintenant déployé en local et accessible à l'adresse suivante :