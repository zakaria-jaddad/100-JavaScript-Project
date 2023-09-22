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

            if (opperation.id === 'ac') {
                // change diplay content to 0 
                output.textContent = '0';
                // clear first number value
                output.dataset.firstNumber = '0';

                // remove the previous opperation from the opperation dataset
                output.dataset.opperation = ''
            }
            
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


    // keyboard shortcuts
    // keydown event 
    document.addEventListener('keydown', (event) => {

        const keyInput = event.key

        // checks if keydown input is in the string numbers        
        if ('1234567890.+-/*='.includes(keyInput)) {
            document.querySelector(`[data-value="${keyInput}"]`).click();
            return
        }
        else if (keyInput === 'Enter') {
            document.querySelector(`[data-value="="`).click();
            return;
        }
        else if (keyInput === 'Backspace') {

            // reduse the length by one
            // remove last index of the display number
            output.textContent = removeLastIndex(output.textContent)

            // assigne the value to first argument
            output.dataset.firstNumber = output.textContent;
            if (output.textContent === '') {

            }
        }
    })
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

function removeLastIndex(element) {
    element = element.split('').slice(0, element.length - 1);
    return element.join('');
}