function padString(str, strLength, symbol, bool = true){
    let a ='';
    let b = str.length - strLength;
    if (str ===''){
        return console.log('Вы не ввели строку')
    }
    else if (isNaN(strLength)){
        return console.log('Вы ввели не число')
    }
    else if (strLength ===0){
        return console.log('Вы не указали длину строки')
    }
    else if (symbol ===''){
        return console.log('Вы не ввели символ')
    }
    else if (symbol.length > 1){
        return console.log('Вы ввели более 1 символа')
    }
    else if (str.length === strLength){
        console.log(str)
    }
    else if (strLength > str.length && bool===true) {
        for (let i = 0; i < strLength - str.length; i++) {
          a += symbol;
        }
        console.log(str + a)
    }
    else if (strLength < str.length){
        console.log(str.substr(-10, strLength));
    }
    else {
        for (let i = 0; i < strLength - str.length; i++) {
            a += symbol;
        }
        console.log(a + str)
    }
}
let string = prompt('Введите строку: ');
let strLength = +prompt('Введите длину строки: ');
let symbol = prompt('Введите символ');
let bool =false;
padString(string, strLength, symbol, bool)