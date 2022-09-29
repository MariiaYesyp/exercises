function dayOrNight1(x) {
    if (x) {
        return "Have a good day!";
    }
    return "Have a good night!";
}

console.log(dayOrNight1(false));
console.log(dayOrNight1(true));

function dayOrNight2(x) {
    if (x) {
        return "Have a good day!";
    } else {
        return "Have a good night!";
    }
}

console.log(dayOrNight2(false));
console.log(dayOrNight2(true));

function dayOrNight3(x) {
    switch (x) {
        case true:
            return "Have a good day!";
        default:
            return "Have a good night!";
    }
}

console.log(dayOrNight3(false));
console.log(dayOrNight3(true));


function dayOrNight4(x) {
    let message;
    if (x) {
        message = "Have a good day!";
    } else {
        message = "Have a good night!";
    }
    return message;
}

console.log(dayOrNight4(false));
console.log(dayOrNight4(true));

function dayOrNight5(x) {
    let message = "Have a good night!";
    if (x) {
        message = "Have a good day!";
    }
    return message;
}

console.log(dayOrNight5(false));
console.log(dayOrNight5(true));
