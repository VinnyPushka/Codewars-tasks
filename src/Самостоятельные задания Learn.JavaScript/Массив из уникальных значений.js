/*Пусть arr – массив строк.
Напишите функцию unique(arr), 
которая возвращает массив, содержащий только уникальные элементы arr.

Например:
*/

function unique(arr) {
    let uniqueArray = [];
    arr.forEach(function (item) {
        if (!uniqueArray.includes(item)) uniqueArray.push(item);
    });
    return uniqueArray;
}

let strings = [
    "кришна",
    "кришна",
    "харе",
    "харе",
    "харе",
    "харе",
    "кришна",
    "кришна",
    ":-O",
];
console.log(unique(strings));
