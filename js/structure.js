// Structure
function myFunction(p1, p2) {
    return p1 * p2;
}

document.getElementById("demo01").innerHTML = myFunction(4, 3);

function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

document.getElementById("demo02").innerHTML = toCelsius(77) + " Celsius";

// Call with function
function concatenate(first, last) {
    var full;
    full = first + last;
    return full;
}

function secondFunction() {
    var result;
    result = concatenate('Zara', 'Ali');
    document.write(result);
}