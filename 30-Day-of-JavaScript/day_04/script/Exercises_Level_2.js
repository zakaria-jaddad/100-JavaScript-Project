/* 
    Write a code which can give grades to students according to theirs scores:

    80-100, A
    70-89, B
    60-69, C
    50-59, D
    0-49, F
*/

const prompt = require("prompt-sync")({ sigint: true });

/* 
    this is not meant to be done like this but i tought to do it like this to practice more bit in classes 

    use a simple if else statments to make it happen.
*/

const studentScore = prompt('Enter Your scores: ');

class Grade {
    constructor(bottomScore, topScore, grade) {
        this.bottomScore = bottomScore;
        this.topScore = topScore;
        this.grade = grade;
    }
}
A = new Grade(bottomScore = 80, topScore = 100, grade = 'A');
B = new Grade(bottomScore = 70, topScore = 89, grade = 'B');
C = new Grade(bottomScore = 60, topScore = 69, grade = 'C');
D = new Grade(bottomScore = 50, topScore = 59, grade = 'D');
F = new Grade(bottomScore = 0, topScore = 49, grade = 'F');

const Grades = [A, B, C, D, F];

for (let i = 0; i < Grades.length; i++) {
    if (studentScore >= Grades[i].bottomScore && studentScore <= Grades[i].topScore && studentScore <= 100) {
        console.log(`Your Grade is ${Grades[i].grade}`);
    }
}

/* 
    Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
        September, October or November, the season is Autumn.
        December, January or February, the season is Winter.
        March, April or May, the season is Spring
        June, July or August, the season is Summer
*/

    // 'Autumn' : ['Septemper', 'October', 'Novomber'], 
    // 'Winter' : ['Decemper', 'January', 'November'], 
    // 'Spring' : ['March', 'April', 'February'], 
    // 'Summber': ['Jun', 'Jully', 'Aughust']

// const season = prompt('Enter Month: ');

// if (['Septemper', 'October', 'Novomber'].find(season)) {
//     console.log('Autumn');
// }

// ...

/* 
Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
*/
const day = prompt('Eneter Day: ');

if (day.toUpperCase() === "SATURDAY" || day.toUpperCase() === "SUNDAY")
    console.log(`${day} is a weekend`);
else
    console.log(`${day} is a working day`);