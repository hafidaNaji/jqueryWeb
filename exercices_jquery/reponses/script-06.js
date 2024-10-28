//  Chemin relatif : reponses/script-06.js
// String.fromCharCode() permet de récupérer le caractère à partir du code
document.addEventListener('DOMContentLoaded', function () {


    // Select the text input fields and the output div
    var f1Input = document.getElementById('f1');
    var f2Input = document.getElementById('f2');
    var outDiv = document.getElementById('out');

    // Attach a keypress event to the #f1 input field
    f1Input.addEventListener('keypress', function (event) {
        // Log the Event object to the console
        console.log(event);

        // Use charCode to get the character code
        var charCode = event.charCode;

        // Filter out non-numeric characters
        if (charCode >= 48 && charCode <= 57) {
            outDiv.textContent = f1Input.value + String.fromCharCode(charCode);
        }

        // Prevent the default behavior of keypress
        event.preventDefault();
    });

    // Attach a keypress event to the #f2 input field
    f2Input.addEventListener('keypress', function (event) {
        // Use charCode to get the character code
        var charCode = event.charCode;

        // Filter out non-numeric characters
        if (charCode >= 48 && charCode <= 57) {
            // Append the character to the input field value
            f2Input.value += String.fromCharCode(charCode);

            // Check if the length is a multiple of 3
            if (f2Input.value.length % 3 === 0) {
                // Update the output div with the current input value
                outDiv.textContent = f2Input.value;
            }
        }

        // Prevent the default behavior of keypress
        event.preventDefault();
    });
});










