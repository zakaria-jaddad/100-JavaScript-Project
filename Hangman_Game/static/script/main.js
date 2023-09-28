document.addEventListener("DOMContentLoaded", function() {

    addWord(5)

    // get buttons
    const Buttons = this.querySelectorAll('button')
    Buttons.forEach((Button) => {

        Button.addEventListener('click', function() {

            if (Button.disabled === true) 
                return false;

            disableButton(Button);

            checkLetter(Button.dataset.value);
        });
    });

});

/*  
    changeToNextImage function 
    - it takes the image prametar wich is the current image
        - the image has a data attribute 'hangmanimagenumber' wich is cureent image number 
        - there is 6 images counting from 0 to 5 
        - checks if the currnet image number is greater tahn 5 so that means there is no images left 
    - if not the image source get ipdated to next image source
    - and the 'hangmanimagenumber' get updated by 1
*/
function changeToNextImage(image) {

    // get current image number
    const imageNumber = parseInt(image.dataset.hangmanimagenumber);

    // checking for number of images should be below 5
    if (imageNumber > 5)
        return false;

    // chnage image path using image  number to next image 
    image.src = `http://127.0.0.1:5500/Hangman_Game/static/images/hangman-${imageNumber + 1}.svg`

    // update hang man image number attribute to next number 
    image.dataset.hangmanimagenumber = imageNumber + 1;
}

function addWord(number) {
    fetch('./static/script/json/words.json')
        .then( async response => {
            return await response.json()
        })
        .then((words) =>  {
            return words[number];
        })
        .then((wordAndHint) => {
            const word = wordAndHint["word"];
            const hint = wordAndHint["hint"];

            // letters container, hint container
            const lettersContainer = document.querySelector('#letters-container');
            const hintContainer = document.querySelector('#hint-container');

            // itterating over the word getting letters 
            for (letter of word)
                appendLetters(letter, lettersContainer);

            showHint(hint, hintContainer);
        })
        .catch((error) => console.log(error));
    }

function appendLetters(letter, lettersContainer) {

    // make a span element 
    const span = document.createElement('span');

    // set dataset letter to letter 
    span.dataset.letter = letter;
    span.classList.add('letter');

    // append to container
    lettersContainer.appendChild(span);
}

function showHint(hint, hintContainer) {
    hintContainer.textContent += hint;

}

function disableButton(button) {

    // disable button
    button.disabled = true;

    // change disabled button backgroundColor
    const backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--hover-primary-color');
    button.style.backgroundColor = backgroundColor

}


/* 
    the checkLetter function takes the pressed button Value
    - using a for loop it itterates over all letters in the lettes diplay 
    - checks if the letter is in the letters and show the letters
*/
function checkLetter(buttonValue) {

    // get all letters 
    const letters = document.querySelectorAll('.letter');

    // itterate over each letter
    for (const letter of letters) {

        if (buttonValue === letter.dataset.letter) {
            showLetter(letter);
            return;
        }
    }
    incorrectGuesse()

    /* 
        funtion showLetter
        - showes letter or letters that are in the word display
    */
    function showLetter(showedLetter) {

        showedLetter.classList.add('showed');
        showedLetter.textContent = showedLetter.dataset.letter;
    }

    /* 
        function incorrectGuesse
        - update the number of guesses 
        - change hangman image to next image 'hang the man'

        HOW IT WORKS
            - set the current hangman image to next image

    */
    function incorrectGuesse() {

        // get current hangman image 
        const image = document.querySelector("#hangman-image-box> img");
        changeToNextImage(image) ;


    }

/* 
    i have all letters 
        - itterate over all of them if the current pressed letter is equal to the pressed letter 
            - get the letter span and add it then add the showd class to it 
        else 
            - update the incoreect guesses counter
*/
}
