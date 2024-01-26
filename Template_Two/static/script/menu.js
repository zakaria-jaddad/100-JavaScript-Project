document.addEventListener('DOMContentLoaded', function() {

    // get menu button, nav bar
    const menuButton = document.querySelector('#toggle-menu');
    const navBar = document.querySelector('#nav-bar');

    menuButton.addEventListener('click', function() {
        /* 
            0 -> hidden
            1 -> showed
        */
        const state = menuButton.dataset.state;

        if (state == 0) {
            navBar.classList.remove('d-n');
            menuButton.dataset.state = "1";
        }
        else {
            navBar.classList.add('d-n');
            menuButton.dataset.state = "0";
        }
    })

    /* 
        this is a commun aproach :
            - once the toggle menu is showed 
            - where ever the user press is not the toggle menu remove it 
    */
    this.addEventListener('click', function(event) {
        
        if (!navBar.classList.contains('d-n') && event.target != menuButton) {

            navBar.classList.add('d-n');
            menuButton.dataset.state = "0";
        }

    })
})