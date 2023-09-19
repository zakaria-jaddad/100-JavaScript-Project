document.addEventListener("DOMContentLoaded", function () {

    // get URL input
    const urlInput = document.querySelector('#user-input');
    // add focus event to it
    urlInput.addEventListener("keyup", function() {

        // get cancel button
        const cancelButton = document.querySelector('#cancel');

        const submitButton = document.querySelector('#submit');

        // cheking to add or not the cancel button
        if (this.value !== '') {
            cancelButton.style.display = "block";
            // make a qr code 
            showQrCode(urlInput.value);
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

    // form submited 
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        if(checkUrl(urlInput.value) === false) { // url is not valid 
            // set border color to red
            urlInput.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--error-color');

            document.querySelector('#error').textContent = "invalid URL"
            return false;
        }
        //valid url
        else {
            urlInput.style.borderColor = getRootVariableValue('--grey-color');
            document.querySelector('#error').textContent = "";
            showQrCode(urlInput.value);
        }

    })

    // get download button
    const DownloadButton = document.querySelector('#download-image');

    DownloadButton.addEventListener('click', function() {
        const imagePath = document.querySelector('#qr-image').getAttribute('src');

        // ave image
        saveAs(imagePath, 'Qr_Image.jpg');
    });

    document.querySelector('#cancel').addEventListener("click", function () {
        
        // clear inputs value
        document.querySelector('#user-input').value = '';
        this.style.display = "none";
    })
})

function checkUrl(url) {

    // regular expression
    const urlRegex = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%_\+~#=]{2,400006}\.[a-z]{2,}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;

    return urlRegex.test(url) ? true : false
}

function getRootVariableValue (variableName) {


    return getComputedStyle(document.documentElement).getPropertyValue(variableName);

}

function showQrCode(data) {
    fetch(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=hello${data}`)
        .then((response) => {
            const image = document.querySelector('#qr-image');
            image.src = response.url;

            // show download button
            document.querySelector('#download-image').style.display = "block";
            
        })
}