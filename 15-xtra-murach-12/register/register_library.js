var $ = function (id) { return document.getElementById(id); }

// List of events: http://www.w3schools.com/jsref/dom_obj_event.asp

var RegisterForm = function () {
    var email = $("email");

    // 1. Handle input on the email element.
    
    var password = $("password");

    // 2. Handle input on the password element.

    var verify = $("verify");

    // 3. Handle input on the verify element.
    
    var cardNumber = $("card_number");

    // 4. Handle input on the card number element.
    
    var expDate = $("exp_date");
    
    // 5. Handle input on the expiration date element.
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

    // 2. Use the parseInt() function to convert the strings
    //    to text.

    // 4. Return true if the date values look legit.
    return true;
}

RegisterForm.prototype.hasExpired = function (text) {
    // 1. Split the text at the / character.

    // 2. Use the parseInt() function to convert the strings
    //    to text.

    // 3. Create two Date objects - one for today, and the
    //    other with the year and month of the expiration date.

    // 4. Return true if the card has expired.
    return true;
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

    // 2. Clear the nodeValue of the firstChild element of the _error element.
}

RegisterForm.prototype.reportError = function (fieldName, message) {
    // 1. Add the "error" class to the corresponding _error element.

    // 2. Set the nodeValue of the firstChild element of the _error element.
}

RegisterForm.prototype.updateSubmit = function () {
    // 1. Enable the submit button if there are no errors.
}
