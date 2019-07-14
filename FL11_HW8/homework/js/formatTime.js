let formatTime = (number) => {
    if (number < 0) {
        number *= -1;
    }
    let
        minutes = number,
        hours = 0,
        days = 0;

    if (number >= 60) {
        minutes %= 60;
        hours = (number - number % 60) / 60;
    }

    if (number >= 1440) {
        hours = (number - number % 60) / 60;
        days = (hours - hours % 24) / 24;
        hours %= 24;
    }
    return days + ' day(s) ' + hours + ' hour(s) ' + minutes + ' minute(s)';
}

console.log(formatTime(7809));