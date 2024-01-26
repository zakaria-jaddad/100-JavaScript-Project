export function startSlide (element) {

    const progress = element.dataset.progress;

    element.style.width = `${progress}%`;

}
/* 
    start Counting tkaes
    - count element 
*/
export function startCount(element) {

    // get element end number 
    const goal = element.dataset.goal;
    
    // start Counting
    let count = setInterval(() => {
        
        // increment number
        element.textContent++;

        // check number
        
        if (element.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);            
}

