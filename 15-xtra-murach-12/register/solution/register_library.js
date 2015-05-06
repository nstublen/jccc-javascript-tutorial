var $ = function (id) { return document.getElementById(id); }

var RegisterForm = function () {
    var theForm = this;
    
    var email = $("email");

    // 1. Handle input on the email element.
    email.oninput = function () {
        if (!theForm.isEmail(email.value)) {
            theForm.reportError(email.id, "Invalid email address");
        } else {
            theForm.clearError(email.id);
        }
        theForm.updateSubmit();
    }
    email.oninput();
    
    var password = $("password");
    var verify = $("verify");

    // 2. Handle input on the password element.
    password.oninput = function () {
        if (theForm.tooShort(password.value, 6)) {
            theForm.reportError(password.id, "Must be at least 6 characters");
        } else {
            theForm.clearError(password.id);
        }

        verify.oninput();
    }
    
    // 3. Handle input on the verify element.
    verify.oninput = function () {
        if (!theForm.matches(password.value, verify.value)) {
            theForm.reportError(verify.id, "The passwords do not match");
        } else {
            theForm.clearError(verify.id);
        }
        theForm.updateSubmit();
    }

    password.oninput();
    
    var cardNumber = $("card_number");

    // 4. Handle input on the card number element.
    cardNumber.oninput = function () {
        if (!theForm.isCC(cardNumber.value)) {
            theForm.reportError(cardNumber.id, "Invalid card number");
        } else {
            theForm.clearError(cardNumber.id);
        }
        theForm.updateSubmit();
    }
    cardNumber.oninput();
    
    var expDate = $("exp_date");
    
    // 5. Handle input on the expiration date element.
    expDate.oninput = function () {
        if (!theForm.isDate(expDate.value)) {
            theForm.reportError(expDate.id, "Invalid date");
        } else if (theForm.hasExpired(expDate.value)) {
            theForm.reportError(expDate.id, "Expired card");
        } else {
            theForm.clearError(expDate.id);
        }
        theForm.updateSubmit();
    }
    expDate.oninput();
}

// Validation methods
RegisterForm.prototype.tooShort = function (text, length) {
    return (text.length < length);
}

RegisterForm.prototype.matches = function (text1, text2) {
    return (text1 == text2);
}

RegisterForm.prototype.isEmail = function (text) {
    if (text.length == 0) return false;
    var parts = text.split("@");
    if (parts.length != 2 ) return false;
    if (parts[0].length > 64) return false;
    if (parts[1].length > 255) return false;
    var address =
        "(^[\\w!#$%&'*+/=?^`{|}~-]+(\\.[\\w!#$%&'*+/=?^`{|}~-]+)*$)";
    var quotedText = "(^\"(([^\\\\\"])|(\\\\[\\\\\"]))+\"$)";
    var localPart = new RegExp( address + "|" + quotedText );
    if ( !parts[0].match(localPart) ) return false;
    var hostnames =
        "(([a-zA-Z0-9]\\.)|([a-zA-Z0-9][-a-zA-Z0-9]{0,62}[a-zA-Z0-9]\\.))+";
    var tld = "[a-zA-Z0-9]{2,6}";
    var domainPart = new RegExp("^" + hostnames + tld + "$");
    if ( !parts[1].match(domainPart) ) return false;
    return true;
}

RegisterForm.prototype.isCC = function (text) {
    return /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(text);
}

RegisterForm.prototype.isDate = function (text) {
    if ( ! /^[01]?\d\/\d{4}$/.test(text) ) return false;
    
    // 1. Split the text at the / character.
    var dateParts = text.split("/");

    // 2. Use the parseInt() function to convert the strings
    //    to text.
    var month = parseInt(dateParts[0]);
    var year = parseInt(dateParts[1]);

    // 4. Return true if the date values look legit.
    if ( month < 1 || month > 12 ) return false;
    return true;
}

RegisterForm.prototype.hasExpired = function (text) {
    // 1. Split the text at the / character.
    var dateParts = text.split("/");

    // 2. Use the parseInt() function to convert the strings
    //    to text.
    var month = parseInt(dateParts[0]);
    var year = parseInt(dateParts[1]);

    // 3. Create two Date objects - one for today, and the
    //    other with the year and month of the expiration date.
    var now = new Date();
    var exp = new Date( year, month);

    // 4. Return true if the card has expired.
    return ( now > exp );
}

// Error message methods
RegisterForm.prototype.isThereAnError = function () {
    var spans = document.querySelectorAll("span[id$='_error']");
    for (var index = 0; index < spans.length; ++index) {
        if (spans[index].className !== "") {
            return true;
        }
    }
    return false;
}

RegisterForm.prototype.resetErrors = function () {
    var spans = document.querySelectorAll("span[id$='_error']");
    for (var index = 0; index < spans.length; ++index) {
        spans[index].className = "";
        spans[index].firstChild.nodeValue = "";
    }
}

RegisterForm.prototype.clearError = function ( fieldName ) {
    // 1. Clear the "error" class to the corresponding _error element.
    $(fieldName + "_error").className = "";

    // 2. Clear the nodeValue of the firstChild element of the _error element.
    $(fieldName + "_error").firstChild.nodeValue = "";
}

RegisterForm.prototype.reportError = function (fieldName, message) {
    // 1. Add the "error" class to the corresponding _error element.
    $(fieldName + "_error").className = "error";

    // 2. Set the nodeValue of the firstChild element of the _error element.
    $(fieldName + "_error").firstChild.nodeValue = message;
}

RegisterForm.prototype.updateSubmit = function () {
    // 1. Enable the submit button if there are no errors.
    $("register").disabled = this.isThereAnError();
}
