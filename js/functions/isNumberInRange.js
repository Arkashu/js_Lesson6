function isNumberInRange(number){
    if (number>0 && number<10){
        return console.log(true);
    }
    else {
        return console.log(false);
    }
}
let number = +prompt('Введите число');
isNumberInRange(number);