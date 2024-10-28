//  Chemin relatif : reponses/script-03.js

$(document).ready(function () {

    // 1. Créer une balise <pre> et l'ajouter dans la div
    var preElement = $("<pre></pre>").appendTo("#ce");

    // 2. Ajouter la classe CSS "language-javascript" à la balise <pre>
    preElement.addClass("language-javascript");

    // 3. Créer une balise <code> et l'ajouter dans la balise <pre>
    var codeElement = $("<code></code>").appendTo(preElement);

    // 4. Faire une requête AJAX pour récupérer le fichier user.json sous format texte
    $.ajax({
        url: "./files/users.json",
        dataType: "text",
        success: function (data) {
            // 5. Ajouter son contenu dans la balise <pre>
            codeElement.text(data);

            // 6. Appeler la méthode "Prism.highlightAll()"
            Prism.highlightAll();
        },
        error: function (error) {
            console.error("Error loading users.json:", error);
        }
    });

    // Display the final result in the code block
    $("#reponse").text("Loading usa.json...");
});









