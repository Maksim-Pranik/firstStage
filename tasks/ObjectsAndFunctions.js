const car = {
    colour: 'black'
};

console.log(car.colour);

car.colour = "green"

console.log(car.colour);

car.power = carPover()

function carPover() {
    console.log(200);
}

//Подсчет фркутов
let fruits = (pear, apple) => pear + apple;

console.log(fruits(10, 4));


//Терминал
let enterredName = prompt("Введите имя", "имя");
const nameInTherminal = "Maks";
function checkIfNameIsCorrect(enterredName) {
    (enterredName === nameInTherminal) ? alert(`Привет ${nameInTherminal}!`) : alert("Нет такого имени")
}

checkIfNameIsCorrect(enterredName);

//Тип аргумента
function typeOfArgument(arg) {
    console.log(typeof arg);
}
typeOfArgument(true)

//Простые числа
function simpleNumber(num) {
    let i = 2;
    let check;
    while (i < num) {
        if (num % i !== 0) {
            check = 1
        } else {
            check = 0
            break
        }
        i += 1
    }
    (check === 1) ? console.log("Число простое") : console.log("Число не простое");
}

simpleNumber(67);
