window.addEventListener("beforeunload", function () {
    localStorage.setItem("scrollPosition", window.scrollY);
})

document.addEventListener("DOMContentLoaded", function () {
    
    // get full heihgt
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (localStorage.getItem('scrollPosition') !== null) {

        window.scrollTo(0, parseInt(localStorage.getItem("scrollPosition")));

        console.log(parseInt(localStorage.getItem("scrollPosition")))
    }


    // scroll behavior
    window.onscroll = function () {

        // get slider
        const slider = document.querySelector('#slider');

        // sticky slider
        sticky(slider);

        const progress = document.querySelector('#progress');

        progress.style.width = `${(this.scrollY / height) * 100}%`;

        localStorage.setItem("scrollPosition", window.scrollY)

    }
})


function sticky(slider) {
    // making element sticky 
    slider.style.top = `${this.scrollY}px`;

}