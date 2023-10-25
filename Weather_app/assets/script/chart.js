
setGraph(['e'], [15]);

/* 
    labels and weatherDate both are Arrays 
*/
function setGraph(labels, weatherData) {
    
    const data = {
        labels: labels,
        datasets: [{
            label: 'Degree In Celsius',
            data: weatherData,
            backgroundColor: [
            'rgba(256, 256, 256, 0.7)',
        ],    
        borderColor: [
            getComputedStyle(document.documentElement).getPropertyValue('--third-background-color')
            ],
        borderWidth: 1
        }]
    };
    
    const myChart = document.querySelector('[data-today-weather-graph]');
    
    new Chart(myChart, {
    
        type :'bar' , 
        data : data, 
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    })

}

export {setGraph};

