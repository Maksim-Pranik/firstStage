/* В try catch конструкцию завернуть код: 
console.log(a), let a = 3. И вывести ошибку – 
‘let перед использованием нужно объявить’.  */
try {
  console.log(a)
  let a = 3
} catch (error) {
  console.log('let перед использованием нужно объявить')
}

//При выполнении 1/0  выводить ошибку 'на ноль делить нельзя'
try {
  let wrongExpression = 1 / 0
  if (wrongExpression = Infinity) {
    throw new Error('на ноль делить нельзя')
  }
} catch (error) {
  console.log(error.message);
}