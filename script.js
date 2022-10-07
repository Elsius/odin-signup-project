const signUpButton = document.getElementById("signup");

signUpButton.addEventListener('click', confirmPassword,);


function confirmPassword() {
    const password = document.getElementById("password").value;
    const confirmPass = document.getElementById("confirmPass").value;
    if (password === confirmPass) {
        console.log("it matches")
    }
    else {
        console.log("doh")
    }
}