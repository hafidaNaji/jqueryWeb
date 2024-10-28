//  chemin relatif : reponses/script-01.js
// 
$(document).ready(function () {
    
    // 1. Modifier la couleur du texte de la première div (rouge)
    $("#ce div:first").css("color", "red");

    // 2. Cloner la première et l'ajouter à la fin de la liste des div
    var firstDivClone = $("#ce div:first").clone();
    $("#ce").append(firstDivClone);

    // 3. Déplacer la dernière div et la mettre au début de la liste
    var lastDiv = $("#ce div:last");
    lastDiv.prependTo("#ce");

    // 4. Créer une nouvelle div, l'ajouter à la fin de la liste et afficher dedans le nombre total des div de la liste (y compris celle ajoutée)
    var newDiv = $("<div>").text("Nouvelle div " + ($("#ce div").length + 1));
    $("#ce").append(newDiv);

    // 5. Parcourir toutes les div et y ajouter un numéro d'ordre 1, 2, ...
    $("#ce div").each(function (index) {
        $(this).text($(this).text() + " " + (index + 1));
    });

    // Display the final result in the code block
    $("#reponse").text($("#ce").html());
});


