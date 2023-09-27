document.addEventListener("DOMContentLoaded", function() {

    this.addEventListener('click', function() {
        addWord(5)
    })

});

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
