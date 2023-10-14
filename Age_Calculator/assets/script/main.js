const mainColor = getComputedStyle(document.documentElement).getPropertyValue('--main-color');
const initialColor = getComputedStyle(document.documentElement).getPropertyValue('--smokey-grey')
const errorColor = getComputedStyle(document.documentElement).getPropertyValue('--error-color')
const error = document.querySelector('#err');

document.addEventListener('DOMContentLoaded', function() {

    const inputs = document.querySelectorAll('.input');
    inputs.forEach(input => {
        input.addEventListener('keyup', () => {
    
            if (input.value === '') {
                unsetError(input, initialColor)
                return false;
            }
    
            if (input.id === 'day') {
                if (checkDay(input.value) === true) {
                    unsetError(input, mainColor);
                    return;
                }
            }
            else if (input.id === 'month') {
                if (chekMonth(input.value)) {
                    unsetError(input, mainColor);
                    return;
                }
            }
            else if (input.id === 'year') {

                if (checkYear(input.value)) {
                    unsetError(input, mainColor);
                    return;
                }
            }
            setError(input);
        })
    }) 
    
    const submitButton = document.querySelector('#submit');
    submitButton.addEventListener('click', function() {

        // checking if all inputs are valid 
        inputs.forEach((input) => {

            if (input.value === '') {
                setError(input);
                return false;
            }
        })

        if (isValidDate(inputs[0], inputs[1], inputs[2]) === false) {
            error.style.display = "block";
            inputs.forEach(input => {setError(input)});
            return false;
        }
        inputs.forEach(input => {unsetError(input, initialColor)});
        error.style.display = "none";

        console.log('that was a valid date');

    })
});

function setError(element) {

    element.style.borderColor = errorColor;
    element.style.outlineColor = errorColor;

    const label = element.closest('.input-container').querySelector('.label');
    label.style.color = errorColor;
    
    // disable button 
    document.querySelector('#submit').disabled = true;
    
}

function unsetError(element, color) {
    
    element.style.borderColor = color;
    element.style.outlineColor = mainColor;
    
    const label = element.closest('.input-container').querySelector('.label');

    label.style.color = color;

    // unable button 
    document.querySelector('#submit').disabled = false;
}

// checks is the given year is in the interval [1 - current year]
function checkYear(userYear) {

    const currentYear = new Date().getFullYear();

    if (parseInt(userYear) > 0 && parseInt(userYear) <= currentYear)
        return true;
    return false;

}

function chekMonth(userMonth) {

    if (parseInt(userMonth) > 0 && parseInt(userMonth) <= 31) {
        return true;
    }
    return false;

}

function checkDay(userDay) {

    if (parseInt(userDay) > 0 && parseInt(userDay) <= 31) {
        return true;
    }
    return false;

}

function isValidDate(day, month, year) {

    const userDate = new Date(year.value, parseInt(month.value) - 1, day.value);

    const currentDate = new Date();
    console.log(userDate > currentDate, (userDate.getFullYear() == year.value && userDate.getMonth() == month.value - 1 && userDate.getDate() == day.value))

    if (userDate > currentDate ) {
        return false;
    }
    if (!(userDate.getFullYear() == year.value && userDate.getMonth() == month.value - 1 && userDate.getDate() == day.value)) {
        return false;
    }
    return true;


}