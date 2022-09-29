function hourDayOrNight(h) {
    if( h>= 0 && h <= 6 ) {
        return "Have a good night!";
    } else {
        return "Have a good day!";
    }
}
console.log(hourDayOrNight(5));
console.log(hourDayOrNight(10));