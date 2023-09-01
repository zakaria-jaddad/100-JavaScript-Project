// const firstName = window.prompt('Enter First Name: ');
// const lastName = window.prompt('Enter Last Name: ');

// function fullName(firstName, lastName) {
//     return firstName + ' ' + lastName;
// }

// console.log(fullName(firstName, lastName));

// const weight = window.prompt('Enter Your Weight in KG');
// const height = window.prompt('Enter Your Height in meter');

// function BMIcalculator(weight, height) {
//     return weight / (height * height);
// }

// const BMIResult = BMIcalculator(weight, height);

// if (BMIResult < 18.5) console.log('You are Underweight');
// else if(BMIResult >= 18.5 && BMIResult < 24.9) console.log('You are Normal');
// else if(BMIResult >= 25 && BMIResult < 29.9) console.log('You are Norma Overweight');
// else console.log('You are Obese');

// function findMax() {
//     let maxNumber = arguments[0]
//     for (let i = 1; i < arguments.length; i++) {
//         if (maxNumber < arguments[i])   maxNumber = arguments[i];
//     }
//     return maxNumber ;
// }


// console.log(findMax(3, 4, 20, -3, -20));
// console.log(findMax(-2, -4, -20, -3, -20));


function userIdGenerator() {

    const string = 'AQZWSXEDCRFVTGBYHUNJMKIOLPaqzwsxedrcfvgtbnhyujmkiolp1234567890';

    const numberOfChar = window.prompt('Enter number of character : ');

    const numberOfId = window.prompt('Enter number of id\'s to get: ')

    // each id has it's own loop
    for (let i = 0; i < parseInt(numberOfId); i++) {
        let resaultString = '';

        // each id has chars 
        for (let j = 0; j < parseInt(numberOfChar); j++) {

            resaultString += string[Math.ceil(Math.random() * string.length)];

        }
        console.log(resaultString);
    }
}

userIdGenerator()