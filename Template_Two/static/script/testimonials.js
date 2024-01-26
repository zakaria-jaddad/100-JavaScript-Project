document.addEventListener("DOMContentLoaded", function() {

    const testimonialsElements = document.querySelectorAll('.ceo');  

    const circlesContainer = document.querySelector('.testimonials .circles');

    addSliderCircles(testimonialsElements, circlesContainer);

    const testimonialsCircles = document.querySelectorAll('.testimonials-circles');
    testimonialsCircles.forEach((circle) => {
        circle.addEventListener('click', function() {

            const clickedCircleIndex = circle.dataset.index;

            const activecircleIndex = document.querySelector('.testimonials-circles.active').dataset.index;

            const direction = parseInt(clickedCircleIndex) - parseInt(activecircleIndex);


            const pagesContainer = document.querySelector('.ceo-container');

            pagesContainer.style.translate = `${parseFloat(window.getComputedStyle(pagesContainer).getPropertyValue('translate')) + (direction * -33.333333333)}%`;

            changeCircleToActive(circle, testimonialsCircles);
        })
    })

})

function addSliderCircles(sliders, container) {
    sliders.forEach((Element) => {

        const circle = document.createElement('div');

        if (Element.classList.contains('active')) 
            circle.classList.add('active');
        else
            circle.classList.remove('active');

        circle.classList.add('testimonials-circles');
        circle.dataset.index = Element.dataset.index;
        container.appendChild(circle);
    })
}

function changeCircleToActive(circle, circles) {

    circles.forEach((circleElement) => {

        if (circleElement === circle) {
            circle.classList.add('active');
        }
        else {
            circleElement.classList.remove('active');
        }

    })

}