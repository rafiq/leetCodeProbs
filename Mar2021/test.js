function turnOn(machine) {
    return machine.isOn = true

}
var computer = {
    isOn : false
}
console.log(computer)
console.log(turnOn(computer));
console.log(computer)
