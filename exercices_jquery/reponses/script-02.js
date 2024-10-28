//  chemin relatif : reponses/script-02.js

$(document).ready(function () {

    // 1. Les div vont disparaître les unes à la suite des autres, en commençant par la première à gauche.
    $("#ce .box").on("click", function () {
        $(this).fadeOut(500, function () {
        
            if ($(this).is(":last-child")) {
                $("#ce .box").fadeIn(500);
            }
        });
    });

    // 2. Même chose que la première question, à la différence qu'elles réapparaîtront les unes à la suite des autres après un délai.
    $("#ce .box").on("click", function () {
        var delay = 500;
        $("#ce .box").each(function (index) {
            var box = $(this);
            setTimeout(function () {
                box.fadeOut(500, function () {
                   
                    if (box.is(":last-child")) {
                        $("#ce .box").fadeIn(500);
                    }
                });
            }, index * delay);
        });
    });

    // afficher le resultat final
    $("#reponse").text("Clicker pour voir l'annimation !!!");
});









