export const weather = new Map();

/* 
day and night 
 */
setItem([0, 1], "clear-day"); 
weather.set(2, "cloudy"); 
weather.set(3, "overcast");
setItem([45, 48], "fog")

setItem([51, 53, 55], 'drizzle')
setItem([56, 57], 'hail')
setItem([61, 63, 65], 'hail')
setItem([66, 67], 'sleet')
setItem([71, 73, 75], 'snow')
weather.set(77, 'snow')
setItem([80, 81, 82], 'rain')
setItem([85, 86], 'snow')
weather.set(95, 'thunderstorms')
setItem([96, 99], 'thunderstorms-rain')




function setItem(values, icon) {

    values.forEach(value => {
        
        weather.set(value, icon)

    });

}