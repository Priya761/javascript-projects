const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const newYears = '1 Jan 2023';

function countdown(){
    const newYearsDate = new Date(newYears);
    // console.log(newYearsDate);

    const currentDate = new Date();
    // console.log(currentDate);

    diffOfDateInMilliSeconds = newYearsDate - currentDate;
    // 1 day has 86400000 milliseconds. Therefore, dividing by 86400000 to get no. of days remaining for New Years. 
    // using Math.floor as the milliseconds comes in fraction, and the fraction part is the no. of milliseconds left for today's day to get over, so we can neglect that fraction part that's why Math.floor
    // daysLeftForNewYearsInFloat = diffOfDateInMilliSeconds / 86400000;
    // console.log(daysLeftForNewYearsInFloat);
    daysLeftForNewYears = Math.floor(diffOfDateInMilliSeconds / 86400000);
    // console.log(daysLeftForNewYears);

    diffOfDateInSeconds = diffOfDateInMilliSeconds / 1000;

    // (diffOfDateInSeconds / 3600) denotes how many hours are left for new years. (diffOfDateInSeconds / 3600) % 24 gives the hours left today.
    // Eg: 86400 seconds / 3600 seconds (seconds in 1 hour) = 24 hours
    hoursLeft = Math.floor(diffOfDateInSeconds / 3600) % 24;
    // console.log(hoursLeft);

    // Eg: 86400 seconds / 60 seconds (seconds in 1 minute) = 1400 minutes
    minutesLeft = Math.floor(diffOfDateInSeconds / 60) % 60;
    // console.log(minutesLeft);

    secondsLeft = Math.floor(diffOfDateInSeconds) % 60;
    // console.log(secondsLeft);

    console.log(daysLeftForNewYears, hoursLeft, minutesLeft, secondsLeft);

    days.innerHTML = formatTime(daysLeftForNewYears);
    hours.innerHTML = formatTime(hoursLeft);
    minutes.innerHTML = formatTime(minutesLeft);
    seconds.innerHTML = formatTime(secondsLeft);
}

// To add 0 before the number if number is less than 10.
function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

// Initial call
countdown();

var stop = setInterval(countdown, 1000);

// call this clearInterval(stop) function on console whenever you want to stop the setInterval function.
// clearInterval(stop);