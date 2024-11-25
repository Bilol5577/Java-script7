let number1 = prompt("Son yozing");
let number2 = prompt("Son yozing");
let number3 = prompt("Son yozing");
let number4 = prompt("Son yozing");
let number5 = prompt("Son yozing");
let number6 = prompt("Son yozing");
let number7 = prompt("Son yozing");
let number8 = prompt("Son yozing");

let numbers = [number1,number2,number3,number4,number5,number6,number7,number8];
console.log(numbers);

let evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i])
    }
};

console.log(evenNumbers)