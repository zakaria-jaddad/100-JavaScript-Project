document.addEventListener("DOMContentLoaded", function () {
    
    if (localStorage.getItem("scrollPosition") !== null) {
        window.scrollTo({
            top: parseInt(localStorage.getItem("scrollPosition")), 
            left: 0, 
            behavior: "smooth",
        })
        console.log(parseInt(localStorage.getItem("scrollPosition")))
    }

    // get full heihgt
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // scroll behavior
    window.onscroll = function () {

        // get slider
        const slider = document.querySelector('#slider');

        // sticky slider
        sticky(slider);

        const progress = document.querySelector('#progress');

        progress.style.width = `${(this.scrollY / height) * 100}%`;

    }
})


window.addEventListener("scroll", function () {
    localStorage.setItem("scrollPosition", `${window.scrollY}`)
})

function sticky(slider) {
    // making element sticky 
    slider.style.top = `${this.scrollY}px`;

}