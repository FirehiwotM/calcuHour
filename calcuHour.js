const hoursPerDay = 24;
const minsPerHour = 60;

const hoursToNextHour = (min) => {
    return (minsPerHour - min) / minsPerHour;
}
const calHoursTillNoon = (hr, min) => {
    let hoursTillNoon = hoursToNextHour(min);


if(hr >= 12){
    hr -= 12;
    hoursTillNoon += 12;
}

    hoursTillNoon += (11 - hr);
    return hoursTillNoon;
}
console.log(calHoursTillNoon (9, 17));