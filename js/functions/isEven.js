function isEven (number){
 if (number % 2 === 0){
     return console.log(true);
 }
 else {
  return console.log(false)
 }
}
let number = +prompt('Введите число');
isEven(number);