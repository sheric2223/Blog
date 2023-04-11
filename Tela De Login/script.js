const form = document.querySelector("#form")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")

form.addEventListener("Submit",(Event) => {
    event.preventDefault();
    if(emailInput.value ==="" || !emailValid(emailInput.value,)) {
        alert("Campo De Email Está Vazio");
        return;
    }
    if(validadePassword.value ==="" || !validatePassword(passwordInput.value, 8)) {
        alert("Campo De Email está vazio");
        return;
    }
    form.submit();
});

function emailValid(email){
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    if(emailRegex.test(email)){
        return true;
    }else
        return false;
    }

    function validatePassword(password, minDigits) {
        if(password.length >=minDigits)
        return true

        return false
    }