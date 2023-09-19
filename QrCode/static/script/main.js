document.addEventListener("DOMContentLoaded", function () {

    // get URL input
    const urlInput = document.querySelector('#url');
    // add focus event to it
    urlInput.addEventListener("keyup", function() {

        // get cancel button
        const cancelButton = document.querySelector('#cancel');

        const submitButton = document.querySelector('#submit');

        // cheking to add or not the cancel button
        if (this.value !== '') {
            cancelButton.style.display = "block";
        }
        else {
            cancelButton.style.display = "none";
            this.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--grey-color');

            // set the text ot the error to ''
            document.querySelector('#error').textContent = '';
        }

        submitButton.disabled = this.value !== '' ? false : true;
    })

    const form = document.querySelector('#qr-form');
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        if(checkUrl(urlInput.value) === false) {
            // set border color to red
            urlInput.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--error-color');

            document.querySelector('#error').textContent = "invalid URL"
            return false;
        }
        else {
            urlInput.style.borderColor = getRootVariableValue('--grey-color');
            document.querySelector('#error').textContent = "";
        }

    })
})

function checkUrl(url) {

    // regular expression
    const urlRegex = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%_\+~#=]{2,256}\.[a-z]{2,}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;

    return urlRegex.test(url) ? true : false
}

function getRootVariableValue (variableName) {


    return getComputedStyle(document.documentElement).getPropertyValue(variableName);

}