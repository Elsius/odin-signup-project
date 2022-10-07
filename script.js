const signUpButton = document.getElementById("signup");

signUpButton.addEventListener('click', confirmPassword,);


function confirmPassword() {
    const password = document.getElementById("password").value;
    const confirmPass = document.getElementById("confirmPass").value;
    if (password === confirmPass) {
        //do stuff if password matches
    }
    else {
        alert("Passwords do not match")
    }
}