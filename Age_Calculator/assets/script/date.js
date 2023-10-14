
document.addEventListener('DOMContentLoaded', function() {
    
    // get Date Container 
    const DateContainer = document.querySelector('#date');
    setDate(DateContainer);
    
    setInterval(() =>  {
        setDate(DateContainer);
    }, 1000)
    
}) 

function fixNumber(number) {
    const newNumber = parseInt(number) >= 0 && parseInt(number) < 10 ? '0' + String(number) : number;
    return newNumber;
}

// setDate function takes the Date container and add current date and time to it 
function setDate(DateContainer) {
    const now = new Date() ;
    
    const dayNumber = now.getDate();

    const dayName = Days[now.getDay()];

    const monthName = Months[now.getMonth()];

    const hour = fixNumber(now.getHours());

    const minuts = fixNumber(now.getMinutes());

    const seconds = fixNumber(now.getSeconds());

    DateContainer.textContent = `${dayName} ${dayNumber} ${monthName} ${hour}:${minuts}:${seconds}`;
}

const Days = {
    0 : "Sun", 
    1 : "Mon", 
    2 : "Tues", 
    3 : "Wed", 
    4 : "Thurs", 
    5 : "Fri", 
    6 : "Sat", 
}
const Months = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec"
}

/* 
    Date Formula
    DD Name DD Number Hours:Minuts
*/