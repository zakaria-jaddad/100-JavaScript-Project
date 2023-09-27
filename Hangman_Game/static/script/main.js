document.addEventListener("DOMContentLoaded", function() {

    this.addEventListener("click", function() {

        const image = this.querySelector('#hangman-image-box > img');

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

