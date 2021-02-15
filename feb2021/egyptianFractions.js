function egyptian(num1,num2) {
    let pracitcalNumbers = [1, 2, 4, 6, 8, 12, 16, 18, 20, 24, 28, 30, 32, 36, 40, 42, 48, 54, 56, 60, 64, 66, 72, 78, 80, 84, 88, 90, 96, 100, 104, 108, 112, 120, 126, 128, 132, 140, 144, 150];
    let possibleDenoms = [];

    for (let num of pracitcalNumbers) {
        if (num1 % num === 0) {
            possibleDenoms.push(num)
        }
    }
    return possibleDenoms;
}

console.log(egyptian(Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3

