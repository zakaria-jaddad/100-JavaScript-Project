export function showLocationErrorAlert (alertMessage) {

    const errorMessage = document.querySelector('#error-message');
    errorMessage.textContent = alertMessage
    
    // get error container 
    const locationErrorContainer = document.querySelector('#location-error-alert');

    locationErrorContainer.classList.remove('d-n');

    document.body.classList.add('ov-hidden')

    document.body.classList.remove('blurred');

}


const reloadButton = document.querySelector('#reload-page-location');
reloadButton.addEventListener('click', () => {


    location.reload();

})