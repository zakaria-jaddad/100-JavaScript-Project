const mainColor = getComputedStyle(document.documentElement).getPropertyValue('--main-color');
const initialColor = getComputedStyle(document.documentElement).getPropertyValue('--smokey-grey')

document.addEventListener('DOMContentLoaded', function() {

    // day Input
    const inputs = document.querySelectorAll('.input');
    inputs.forEach(input => {
        input.addEventListener('keyup', () => {
    
            if (input.value === '') {
                unsetError(input, initialColor)
                return false;
            }
    
            let Regex = '';   // initilaizaition before assignments 

            if (input.id === 'day') {
                Regex = /^(?:[1-9]|[12]\d|3[01])$/ig;
            }
            else if (input.id === 'month') {
                Regex = /^(?:[1-9]|1[0-2])$/ig
            }
            else if (input.id === 'year') {

                let isValidYear = checkYear(input.value);

                if (isValidYear === true) {
                    unsetError(input, mainColor);
                    return;
                }
                setError(input);
                return;
            }
            
            if ((Regex.test(input.value) === false)) {
                setError(input);
            }
            else {
                unsetError(input, mainColor);
            }
        })
    })  
});

function setError(element) {

    element.style.borderColor = "red";
    element.style.outlineColor = "red";

    const label = element.closest('.input-container').querySelector('span');

    label.style.color = "red";

}

function unsetError(element, color) {

    element.style.borderColor = color;
    element.style.outlineColor = mainColor;

    const label = element.closest('.input-container').querySelector('span');

    label.style.color = color;
}

function checkYear(userYear) {

    const currentYear = new Date().getFullYear();

    if (userYear > 0 && userYear <= currentYear)
        return true;
    return false;

}