const PortfolioAll = [1, 2, 3, 4, 5, 6, 7, 8] ;

const PortfolioApp = [2, 4, 6, 7];

const porfolioPhotography = [2, 3, 5, 6, 7];

const PortfolioWeb = [1, 2, 3, 4];

const PortfolioPrint = [5, 6, 7, 8];

document.addEventListener("DOMContentLoaded", function() {

    const navButtons = document.querySelectorAll('#portfolio-nav > li');
    navButtons.forEach((button) => {

        button.addEventListener('click', function() {

            const portfolioContainer = document.querySelector('#main-porfolio-images-container');

            const portfolioElements = document.querySelectorAll('#main-porfolio-images-container > div');

            // remove current element
            portfolioElements.forEach((Element) => {
                Element.remove();

            })
            
            if (button.id === 'all') 
                addImages(portfolioContainer, PortfolioAll, button.id);

            else if (button.id === 'app')
                addImages(portfolioContainer, PortfolioApp, button.id)

            else if (button.id === 'photography')
                addImages(portfolioContainer, porfolioPhotography, button.id)

            else if (button.id === 'web')
                addImages(portfolioContainer, PortfolioWeb, button.id);
            
            else if (button.id === 'print')
                addImages(portfolioContainer, PortfolioPrint, button.id);

            changeNavButtonColor(button, navButtons);

        })

    })

})

function addImages(container, paths, type) {
    for (const number of paths) {
        // images container
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image');

        // image
        const image = document.createElement('img');
        image.src = `./images/portfolio/portfolio-${number}.jpeg`

        // append image to the image class 
        imageContainer.appendChild(image)

        // create caption container
        const caption = document.createElement('div');
        caption.classList.add('caption');

        const h4 = document.createElement('h4');
        h4.textContent = "Awesome Image";

        const p = document.createElement('p');
        p.textContent = type;

        // set h4 an p in captions
        caption.appendChild(h4);
        caption.appendChild(p);

        imageContainer.append(caption);

        container.appendChild(imageContainer);
    }

}


function changeNavButtonColor(button, navButtons) {

    navButtons.forEach((navButton) => {

        if (button === navButton) {
            navButton.classList.add('active');
        }
        else {
            navButton.classList.remove('active');
        }

    })

}
/* 

    HTML code : 
        <div class="image">
            <img src="./images/portfolio/portfolio-1.jpeg" alt="just a random image of ssomething">
            <div class="caption">
                <h4>Awesome Image</h4>
                <p>Photography</p>
            </div>
        </div>

*/