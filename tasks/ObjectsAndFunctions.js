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
const fruits = (pear, apple) => pear + apple;

console.log(fruits(10, 4));


//Терминал
const enterredName = prompt("Введите имя", "имя");
const nameInTherminal = "Maks";
function checkIfNameIsCorrect(enterredName) {
    (enterredName === nameInTherminal) ? alert(`Привет ${nameInTherminal}!`) : alert("Нет такого имени")
}

checkIfNameIsCorrect(enterredName);

//Тип аргумента
function showTypeOfArgument(arg) {
    console.log(typeof arg);
}
showTypeOfArgument(true)

//Простые числа
function checkIfItIsSimpleNumber(num) {
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

checkIfItIsSimpleNumber(67);
