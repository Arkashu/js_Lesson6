function mathPow(number, pow = 1){
    if (isNaN(number) || isNaN(pow)){
        return console.log('Error');
    }
    let result = Math.pow(number, pow);
    alert('Итоговое значение: ' + result)
}
let number = +prompt('Введите число: ');
let pow = +prompt('Введите степень: ');
mathPow(number, pow);
