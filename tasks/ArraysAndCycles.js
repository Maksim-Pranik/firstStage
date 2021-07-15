//Вывод фильмов из массива
const arrayOfFilms = ['Крепкий орешек', 'Очень страшное кино', 'Область тьмы', 'Зона 51', 'Джентельмены'];

for (const film of arrayOfFilms) {
  console.log(film);
}

//Массив в строку и обратно в массив
const autoMakers = ['Peygiot', 'Ford', 'Tesla', 'MG', 'Rimac']
let stringFromArray = autoMakers.toString()
let stringToArray = stringFromArray.split(',')

console.log(stringFromArray);
console.log(stringToArray);

//Добавление слова "Hello" к каждому слову массива
const namesOfPeopleIKnow = ['Вика', 'Слава', 'Дмитрий', 'Евлампий', 'Аркадий']

let grittingsFriends = namesOfPeopleIKnow.map(function (name) {
  return 'Hello ' + name;
});

console.log(grittingsFriends);

//Числовой массив в boolean
const arrayOfNumbers = [4, 8, 0, 87, 12]
let booleanArray = arrayOfNumbers.map(function (num) {
  return Boolean(num)
})
console.log(booleanArray);

//Отсортировать массив [1,6,7,8,3,4,5,6] по убыванию
const numbers = [1, 6, 7, 8, 3, 4, 5, 6];
numbers.sort((a, b) => b - a);
console.log(numbers)

//Отфильтровать массив [1,6,7,8,3,4,5,6] по значению >3
const numbersForCompare = [1, 6, 7, 8, 3, 4, 5, 6];
let arrayWithNumberMoreThanThree = numbersForCompare.filter(num => num > 3);
console.log(arrayWithNumberMoreThanThree);

//Написать функцию, которая принимает два параметра 
//- массив и число и выводит индекс элемента массива равный числу
function getElement(array, locationNum) {
  console.log(array[locationNum]);
}
getElement(arrayOfFilms, 2)

//Реализовать цикл, который будет выводить число а, пока оно не станет меньше 10
for (let a = 20; a >= 10; a--) {
  console.log(a);
}
//Реализовать цикл, который выводит в консоль простые числа
nextPrime:
for (let i = 2; i <= 10; i++) {

  for (let j = 2; j < i; j++) {
    if (i % j === 0) continue nextPrime;
  }

  console.log(i);
}

//Реализовать цикл, который выводит в консоль нечетные числа
for (let i = 1; i < 10; i += 2) {
  console.log(i);
}
