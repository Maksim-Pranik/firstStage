/* Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярное выражение, 
которое найдет строки ahb, acb, aeb по шаблону: буква 'a', любой символ, буква 'b' */
const str = 'ahb acb aeb aeeb adcb axeb'.match(/a.b/g);
console.log(str)

//Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные
const numExpressoin = '2+3 223 2223'.match(/2\+3/g);
console.log(numExpressoin)

//Получить день, месяц и год текущей даты и по отдельности вывести в консоль
let now = new Date();
console.log('Год: ' + now.getFullYear())
console.log('Месяц: ' + now.getMonth())
console.log('День: ' + now.getDate())
