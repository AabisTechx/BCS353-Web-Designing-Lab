// Helper: show or clear an error message under a field
function setError(id, message) {
    document.getElementById(id + "Error").innerHTML = message;
}

// Exp 6: Name should contain only alphabets and be at least 6 characters long
function validateName() {
    var name = document.regForm.name.value.trim();
    var alphabetsOnly = /^[A-Za-z ]+$/;

    if (name === "") {
        setError("name", "Name cannot be empty.");
        return false;
    } else if (!alphabetsOnly.test(name)) {
        setError("name", "Name should contain alphabets only.");
        return false;
    } else if (name.length < 6) {
        setError("name", "Name must be at least 6 characters long.");
        return false;
    }
    setError("name", "");
    return true;
}

// Exp 6: Password should not be less than 6 characters
function validatePassword() {
    var password = document.regForm.password.value;

    if (password.length < 6) {
        setError("password", "Password must be at least 6 characters long.");
        return false;
    }
    setError("password", "");
    return true;
}

// Exp 7: E-mail should follow the pattern name@domain.com
function validateEmail() {
    var email = document.regForm.email.value.trim();
    var pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z]{2,})+$/;

    if (!pattern.test(email)) {
        setError("email", "Enter a valid e-mail, e.g. name@domain.com");
        return false;
    }
    setError("email", "");
    return true;
}

// Exp 7: Phone number should contain exactly 10 digits
function validatePhone() {
    var phone = document.regForm.phone.value.trim();
    var pattern = /^[0-9]{10}$/;

    if (!pattern.test(phone)) {
        setError("phone", "Phone number must contain exactly 10 digits.");
        return false;
    }
    setError("phone", "");
    return true;
}

// Runs on submit; the form is sent only if every check passes
function validateForm() {
    var nameOk = validateName();
    var passwordOk = validatePassword();
    var emailOk = validateEmail();
    var phoneOk = validatePhone();
    return nameOk && passwordOk && emailOk && phoneOk;
}
