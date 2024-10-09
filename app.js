let upperCase = document.getElementById("includeUpper");
let lowerCase = document.getElementById("includeLower");
let numbers = document.getElementById("includeNumbers");
let symbols = document.getElementById("includeSymbols");
let generatePassword = document.getElementById("generatePass");
let generatedPassword = document.getElementById("generatedPassword");
let freshChar = "";
let password = "";

generatePassword.addEventListener("click", function () {
    freshChar = ""; // Reset freshChar for a new password
    password = ""; // Reset password for a new generation

    // Check which character sets to include
    if (upperCase.checked) {
        freshChar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowerCase.checked) {
        freshChar += "abcdefghijklmnopqrstuvwxyz";
    }
    if (numbers.checked) {
        freshChar += "1234567890";
    }
    if (symbols.checked) {
        freshChar += "!@#$%^&*()_+-=[]{};\\|,.<>?/"; // Special characters
    }

    // Check if at least one character type is selected
    if (freshChar === "") {
        alert("Please select at least one option");
        return; // Exit the function if no options are selected
    }

    // Get the password length from the input field
    let passwordLength = parseInt(document.getElementById("length").value); // Get value from the length input

    // Ensure the password length is a valid number
    if (isNaN(passwordLength) || passwordLength <= 0) {
        alert("Please enter a valid password length.");
        return; // Exit if the password length is invalid
    }

    // Generate the password
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * freshChar.length); // Get a random index
        password += freshChar[randomIndex]; // Append a random character to the password
    }

    // Display the generated password
    generatedPassword.value = password; // Set the value of the output field to the generated password
});
