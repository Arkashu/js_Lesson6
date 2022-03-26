function getDigitsSum(){
    let sum = 0;
    let result = (''+a).split('');
    console.log(result)
    for (let i = 0; i <= result.length-1; i++) {
       sum += +result[i]
    }
    console.log(sum)
}
let a = +prompt('Введите число')
getDigitsSum();