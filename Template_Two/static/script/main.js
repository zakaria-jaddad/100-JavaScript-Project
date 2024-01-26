import { startSlide, startCount } from "./scroll.js";

document.addEventListener('DOMContentLoaded', function () {

    // Global Vriables
    const landingContainer = document.querySelector('#landing-container');
    const landingPages = Array.from(document.querySelectorAll('#landing-container > .landing'));

    // carusel buttons 
    const buttons = document.querySelectorAll('[data-carousel-button]');
    buttons.forEach((button) => {

        button.addEventListener('click', function () {

            const offset = button.dataset.carouselButton === 'next' ? 1 : -1; // 1 means right -1 menas left    

            // get active landing page
            const activeLandingPage = document.querySelector('#landing-container > .active');

            const activePageIndex = activeLandingPage.dataset.index ;

            if (offset === 1) {  // that means right 
                slideRigth(activePageIndex, landingPages);
            }
            else {
                slideLeft(activePageIndex, landingPages);
            }
        });
    });
});


// Start Counter Variables 

    // get numebrs, get section
const numbers = document.querySelectorAll('#numbers  #number');
const numbersSection = document.querySelector('#about');
let isStartCountStarted = false;

// End Counter Variables 

// Start Width of scrolling variables

const skillsSection = document.querySelector('#video');
let isStartSlidStarted = false;

// End Width of scrolling variables

// Start Main Heading Animation varibles

const mainHeadings = document.querySelectorAll('.main-heading');

// Start Main Heading Animation variables

// window
document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = () => {

    // get header home
    const header = document.querySelector('header#home');

        // sticky header
        header.style.top = `${window.scrollY}px`;
        
        if (window.scrollY >= 0 && window.scrollY < 512) {
            header.style.backgroundColor = "transparent";
            unchageHeader(header)
        }
        else if (window.scrollY >= 512) {
            // const navButton = document.querySelectorAll('#')
            changeHeader(header)
        }


        // Start Counter 

        if (window.scrollY >= numbersSection.offsetTop) {
            if (!isStartCountStarted) {
                numbers.forEach((number) => {startCount(number)});
            }
            isStartCountStarted = true;
        }

        // End Counter 


        // Start Widh on scrolling

        if (window.scrollY >= skillsSection.offsetTop + 200) {
            if (!isStartSlidStarted) {
                document.querySelectorAll('.prog > span').forEach((Element) => {
                    startSlide(Element);
                })
            }
            isStartSlidStarted = true;
        }

        // End Widh on scrolling
    
    // Start Main Heading Animation 

    mainHeadings.forEach((heading) => {

        if (!heading.classList.contains('active')) {
            if (window.scrollY >= heading.offsetTop - 500) {
                heading.classList.add('active');
            }
        }
    })

    // End Main Heading Animation 
    }
})


// Start Header
function changeHeader(header) {
    // change background color to main color 
    header.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--main-color');

    // chnage height size 
    header.style.height = "60px";

    // remove list class hover
    // change a color 
    const navBar = document.querySelector('#nav-bar');
    changeNavButtons(navBar, 0);



}

function unchageHeader(header) {
    // change background color to main color 
    header.style.backgroundColor = "transparent";

    // chnage height size 
    header.style.height = "";

    changeNavButtons(header, 1);
}

/* 
    changeNavButtons Function 
    - par 1 navBar
    - par 2 status 
        - if 0 header has changed 
        - if 1 header is not changed 
*/
function changeNavButtons(navBar, status) {
    const navList = navBar.querySelectorAll('a')

    navList.forEach(list => {
        if (status === 0) {
            list.classList.remove('main-color');
            list.classList.add('white-color');
        }
        else {            
            list.classList.remove('white-color');
            list.classList.add('main-color');
        }
    })
}
// End Header

function getNumber(number) {
    if (number === '')
        return 0;
    return parseFloat(number)
}

/* 
    the swipLeft function takes 3 parameters 
        - the current active landing page 
        - the index of the current active landing page
        - landingPages : and array of all landing pages 
    
    HOW IT WORKS : 
        - 1 : We get the next page
        - 2 : so crr class just returns the image container to the original place by rmoving it we can go what ever we want with the image conatiner  
        - 3 : using prev class we translate image conatiner to the left by -100 vw
        - 4 : the current active page starts moving to right by 100 vw

        - while that working the current page become active and add crr class to come from left 
*/
function slideLeft(activePageIndex, landingPages) {

    const activeLandingPage = document.querySelector(`.landing[data-index="${getNumber(activePageIndex)}"]`);

    // get previous page index 
    const nextPage = getNumber(activePageIndex) === 0 ? landingPages[landingPages.length - 1] : landingPages[activePageIndex - 1];

    // remove the previous page from back 
    nextPage.classList.remove('crr');

    // send next page to left 
    nextPage.classList.add('prev');

    
    setTimeout(() => {
        
        // set nextPage wich is the new one to actvie and show it to user 
        nextPage.classList.add('active');
        
        // strat sedning active page to rigth 
        activeLandingPage.classList.add('next');
        // show next page
        nextPage.classList.add('crr');
    }, 0)

    setTimeout(() => {
        // unset active page 
        activeLandingPage.classList.remove('active', 'next');

        // remove previous class from  new active page 
        nextPage.classList.remove('prev', 'crr');

    }, 600)
}


function slideRigth(activePageIndex, landingPages) {

    
    const activeLandingPage = document.querySelector(`.landing[data-index="${getNumber(activePageIndex)}"]`);


    // get next image index
    const nextLandingPage = parseInt(activePageIndex) === landingPages.length - 1 ? landingPages[0] : landingPages[parseInt(activePageIndex) + 1]

    nextLandingPage.classList.remove('crr');

    // make the next image to the right 
    nextLandingPage.classList.add('next');
    
    // start of animation slide 
    setTimeout( () => {

        // set next page to active 
        nextLandingPage.classList.add('active');

        // strat translating make current listing to go to left 
        activeLandingPage.classList.add('prev');

        // set the next page to be shown 0vw
        nextLandingPage.classList.add('crr');
    }, 0)

    // end of animation slide 
    setTimeout(() => {

        // set showed landing page as active 
        activeLandingPage.classList.remove('active', 'prev');

        // remove classes 
        nextLandingPage.classList.remove('next', 'crr');

    }, 600)
}

