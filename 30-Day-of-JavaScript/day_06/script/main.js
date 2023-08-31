// Write a loop that makes the following pattern using console.log():
const number = window.prompt('Enter a number: ');

let number2 = 1

for (let i = 0; i < parseInt(number); i++) {
    for (let j = 0; j < number2; j++) {
        console.log('#');
    }
    console.log('\n');
    number2++;
}

