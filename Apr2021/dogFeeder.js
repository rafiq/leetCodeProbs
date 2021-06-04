function dogFeeder(weight,age) {
    if (age > 1) {
        if (weight < 5) return "5%";
        if (weight > 6 && weight < 10) return "4%"
        return "heavy";
    } else {
        return "pup"
    }

    // return weight;
}
console.log(
    dogFeeder(50,4),
    dogFeeder(50,.5),
)