const mainColor = getComputedStyle(document.documentElement).getPropertyValue('--main-color');
const initialColor = getComputedStyle(document.documentElement).getPropertyValue('--smokey-grey')
const errorColor = getComputedStyle(document.documentElement).getPropertyValue('--error-color')
const error = document.querySelector('#err');
const Months = {
    0 : 31, 
    1 : 28.25, 
    2 : 31, 
    3 : 30, 
    4 : 31, 
    4 : 30, 
    5 : 31, 
    6 : 31, 
    7 : 30, 
    8 : 31, 
    9 : 30, 
    10 : 31, 
    11: 31
}

document.addEventListener('DOMContentLoaded', function() {

    const inputs = document.querySelectorAll('.input');
    inputs.forEach(input => {
        input.addEventListener('keyup', () => {
    
            if (input.value === '') {
                unsetError(input, initialColor)
                document.querySelector('#submit').style.backgroundColor = mainColor;
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

        const userDate = new Date(inputs[2].value, inputs[1].value - 1, inputs[0].value);

        const currentDate = new Date();

        // seconds from birth to current day
        const difference = Math.abs(currentDate - userDate)
        const numberOfDays = difference / (1000 * 60 * 60 * 24);

        // in seconds + there is also 365 years and 364 years  
        const yearDifference = parseInt(((currentDate - userDate) / (1000 * 60 * 60 * 24 * 365.25)))

        let numberOfDaysLeft = Math.abs(numberOfDays - yearDifference * 365.25)
        let monthsCounter = 0

        // if users birthMonth is less then the current month 
        if (userDate.getMonth() < currentDate.getMonth() && userDate.getDate() < currentDate.getDate()) {

            for (let i = userDate.getMonth(); i < currentDate.getMonth(); i++) {

                numberOfDaysLeft = numberOfDaysLeft - 30.41;
                monthsCounter++;

            }
            console.log('hey');
        }
        else if (currentDate.getMonth() < userDate.getMonth() && currentDate.getDate() < userDate.getDate()) {
            
            let i = userDate.getMonth();
            while (i !== currentDate.getMonth()) {

                console.log(i)

                if (i === 11) {
                    i = 0;
                }
    
                numberOfDaysLeft = numberOfDaysLeft - 30.4;
                monthsCounter++;
                i++;
            }
        }
        console.log(yearDifference, monthsCounter, parseInt(numberOfDaysLeft));


        // get outputs [year, month, day]
        const yearsOutput = document.querySelector('#year-output');
        setCount(yearsOutput, yearDifference);

        const monthOutput = document.querySelector('#month-output');
        setCount(monthOutput, monthsCounter);

        const dayOutput = document.querySelector('#day-output');
        setCount(dayOutput, parseInt(numberOfDaysLeft));

        document.querySelector('#submit').style.backgroundColor = "black";

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