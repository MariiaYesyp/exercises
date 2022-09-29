function hourDayOrNight(h) {
    if( h>= 0 && h <= 6 ) {
        return "Have a good night!";
    } else {
        return "Have a good day!";
    }
}
console.log(hourDayOrNight(5));
console.log(hourDayOrNight(10));



function hourDayOrNight1 (h) {
    switch (h) {
        case ( h >= 0 && h <= 0):
            return "Have a good night!";
        default: 
            return "Have a good day!";
    }
}
console.log(hourDayOrNight1(5));
console.log(hourDayOrNight1(10));
