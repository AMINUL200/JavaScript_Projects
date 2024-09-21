// Function to generate a random password
function generatePassword() {
    const length = 12; // You can adjust the length of the password
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+="; // Characters to include in the password
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    return password;
}

// Function to update the input field with the generated password
const passwordInput = document.getElementById("inp");
function updatePasswordInput() {
    const generatedPassword = generatePassword();
    passwordInput.value = generatedPassword;
}

// Event listener for the "Generate Password" button
const generateBtn = document.querySelector("button");
generateBtn.addEventListener("click", updatePasswordInput);


const coppy = document.querySelector("#coppy");
coppy.addEventListener("click", coppyPasswords);

function coppyPasswords() {
    passwordInput.select();
    document.execCommand("copy");
}
