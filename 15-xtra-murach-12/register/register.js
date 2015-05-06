var registerForm;

var registerClick = function () {
    $("register").blur();
    $("registration_form").submit();
}

var resetClick = function () {
    $("reset_form").blur();
    $("registration_form").reset();
    registerForm.resetErrors();
}

window.onload = function () {
    registerForm = new RegisterForm();
    $("register").onclick = registerClick;
    $("reset_form").onclick = resetClick;
}