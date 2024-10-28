//  Chemin relatif : reponses/script-04.js
//  Chemin relatif : files/user.json

function getUsers(callback) {

    fetch('./files/users.json')
        .then(response => response.json())
        .then(users => callback(users))
        .catch(error => console.error('Error fetching users:', error));
}

document.addEventListener('DOMContentLoaded', function () {
  
    // Select the div with id 'ce'
    var ceDiv = document.getElementById('ce');

    // Call the getUsers function to retrieve users
    getUsers(function (users) {
        // Create an HTML table
        var table = document.createElement('table');

        // Add a table header row
        var headerRow = table.insertRow();
        var emailHeader = headerRow.insertCell(0);
        var tokenHeader = headerRow.insertCell(1);
        emailHeader.innerHTML = '<strong>Email</strong>';
        tokenHeader.innerHTML = '<strong>Token</strong>';

        // Iterate through each user and add a table row for each
        users.forEach(function (user) {
            var row = table.insertRow();
            var emailCell = row.insertCell(0);
            var tokenCell = row.insertCell(1);
            emailCell.textContent = user.email;
            tokenCell.textContent = user.token;
        });

        // Append the table to the 'ce' div
        ceDiv.appendChild(table);
    });
});






