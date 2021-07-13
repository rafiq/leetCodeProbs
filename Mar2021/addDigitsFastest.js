// What in the world is this?! So if I modulo 9, then I get the right answer? How?

var addDigits = function(num) {
    if(num == 0) return 0;
    if(num % 9  == 0) return 9;
    return num % 9;
};


