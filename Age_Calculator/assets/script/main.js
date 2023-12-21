const mainColor = getComputedStyle(document.documentElement).getPropertyValue('--main-color');
const initialColor = getComputedStyle(document.documentElement).getPropertyValue('--smokey-grey')
const errorColor = getComputedStyle(document.documentElement).getPropertyValue('--error-color')
const error = document.querySelector('#err');
const submitButton = document.querySelector('#submit');

document.addEventListener('DOMContentLoaded', function() {

    const inputs = document.querySelectorAll('.input');
    inputs.forEach(input => {
        input.addEventListener('keyup', () => {
    
            if (input.value === '') {
                unsetError(input, initialColor)
                submitButton.style.backgroundColor = mainColor;
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
    


    submitButton.addEventListener('click', function() {

        // checking if all inputs are valid 
        inputs.forEach((input) => {

            if (input.value === '') {
                setError(input);
                return false;
            }
        })

        // if date is invalid
        if (isValidDate(inputs[0], inputs[1], inputs[2]) === false) {
            error.style.display = "block";
            inputs.forEach(input => {setError(input)});
            return false;
        }

        // if date is valid
        inputs.forEach(input => {unsetError(input, initialColor)});
        error.style.display = "none";


        // Age calculation 
        const userDate = new Date(inputs[2].value, inputs[1].value - 1, inputs[0].value);

        const currentDate = new Date();

        // seconds from birth to current day
        const difference = Math.abs(currentDate - userDate)
        const numberOfDays = difference / (1000 * 60 * 60 * 24);

        // in seconds + there is also 365 years and 364 years  
        const yearDifference = parseInt(((currentDate - userDate) / (1000 * 60 * 60 * 24 * 365.25)))

        let numberOfDaysLeft = Math.abs(numberOfDays - yearDifference * 365.25)

        let monthsCounter = 0;

        // difineding i
        let i = 0;

        // that means a month will be counted 
        if (userDate.getDate() < currentDate.getDate()) {
            i = userDate.getMonth();
        }
        else if (userDate.getDate() > currentDate.getDate()) { // month will not 
            
            i = userDate.getMonth() + 1;
        }


        if (i !== 0) {  // if i 0 that means no days or months
            while (i != currentDate.getMonth()) {
    
                
                numberOfDaysLeft = numberOfDaysLeft - 30.37;
                monthsCounter++;

                if (i == 11) {
                    numberOfDaysLeft = numberOfDaysLeft - 30.37;
                    monthsCounter++;
                    i = 0;
                }
                i++;
            }

        }

        // setting output 

        const yearOutput = document.querySelector('#year-output');
        setCount(yearOutput, yearDifference);


        const monthOutput = document.querySelector('#month-output');
        setCount(monthOutput, monthsCounter);

        const dayOutput = document.querySelector('#day-output');
        setCount(dayOutput, Math.floor(numberOfDaysLeft))


        // chenge buttons background color
        this.style.backgroundColor = "black";

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

/* 
    Start verification function year month and day 
*/
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
/* 
    End verification function year month and day 
*/

/* 
    gets day. month and year checks for date if valid or not
        - either 
            - date from the future 
            - date is not exist like 31/04/1991
*/
function isValidDate(day, month, year) {

    const userDate = new Date(year.value, parseInt(month.value) - 1, day.value);

    const currentDate = new Date();

    // if user date is from the future
    if (userDate > currentDate ) {
        return false;
    }
    // if given date is invalid 
    if (!(userDate.getFullYear() == year.value && userDate.getMonth() == month.value - 1 && userDate.getDate() == day.value)) {
        return false;
    }
    return true;


}

/* 
    Counter Funtion 
*/
function setCount(element, goalNumber) {

    element.textContent = "0";
    const count = setInterval(() => {

        
        // checking for break
        if (element.textContent == goalNumber) {
            clearInterval(count);
            return;
        }

        element.textContent++;

    }, 1000 / goalNumber);

}