//  Chemin relatif : reponses/script-05.js
document.addEventListener('DOMContentLoaded', function () {

    // Selectionner le tableau
    var table = document.querySelector('#ce table');
    var rows = table.querySelectorAll('tr');

    // function de formatage
    function format(number) {
        return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ').toString();
    }

    // caluculer le totale pour chaque ligne et mettre a jour la cellule
    for (var i = 1; i < rows.length - 1; i++) {
        var cells = rows[i].querySelectorAll('td');
        var price = parseFloat(cells[1].textContent);
        var quantity = parseFloat(cells[2].textContent);
        var subtotal = price * quantity;
        cells[3].innerHTML = format(subtotal);
    }

    // caluculer le totale
    var totalCell = rows[rows.length - 1].querySelector('td:last-child');
    var total = 0;
    for (var i = 1; i < rows.length - 1; i++) {
        total += parseFloat(rows[i].querySelectorAll('td')[3].textContent.replace(/\s/g, '').replace(',', '.'));
    }
    totalCell.textContent = format(total);
});











