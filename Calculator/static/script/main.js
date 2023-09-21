document.addEventListener('DOMContentLoaded', function () {

    let output = this.querySelector('#output');

    // flag for opperations
    let opperationFlag = false;

    this.addEventListener('click', function(event) {

        // check if target is number or a dot 
        if (event.target.classList.value.includes('number') === true || event.target.id === '.') {

            if (opperationFlag === false) // opperation has happend or it's the first time  
                output.textContent = '';

        // assign the clicked value to the bored
            output.textContent += event.target.id;
            opperationFlag = true;
        }
    })

    // get all opperations 
    const opperations = document.querySelectorAll('.opperation');

    opperations.forEach((opperation) => {
        opperation.addEventListener('click', function() {

            if (opperation.id === 'ac')
                output.textContent = '0';
            
            if (opperationFlag === false) {
                return;
            }
            if ('+/*-'.includes(opperation.id)) {

                // get firstnumber and store it in dataset
                const firstNumber = parseFloat(output.textContent);
                output.dataset.firstNumber = firstNumber;

                // store the opeertaion type
                output.dataset.opperation = opperation.id;
            }
            else if (opperation.id === '=') {

                // no operation has been made
                if (output.dataset.opperation === '')
                    return;
                
                const secondNumber = parseFloat(output.textContent);

                // show and save resualt
                output.textContent = convertToOperator(output.dataset.opperation, parseFloat(output.dataset.firstNumber), secondNumber);

                // if division by zero 
                if (output.textContent === 'System Error') {
                    output.textContent = 'System Error';
                    output.dataset.firstNumber = 0;
                }
                output.dataset.firstNumber = output.textContent;
                return;
            }
            opperationFlag = false;
        });
    });

});

function convertToOperator(stringOperator, firstOperator, secondOperator) {
    switch(stringOperator) {
        case '+' :
            return firstOperator + secondOperator;
        case '-' :
            return firstOperator - secondOperator;
        case '/' :
            if (secondOperator === 0)
                return 'System Error';
            return firstOperator / secondOperator;
        case '*':
            return firstOperator * secondOperator;
    }
}