/* Необходимо реализовать функцию hasConsecutive, которая будет принимать список цифр (arr) и проверять, 
встречается ли заданная цифра (n) указанное число раз подряд (times).
Функция должна возвращать True или False.
Исходим из того, что все параметры всегда буду валидными */

// function hasConsecutive(arr, n, times) {
//     const str = arr.join("");
//     const regExp = new RegExp(String(n).repeat(times), "ig");
//     return regExp.test(str);
// }

function hasConsecutive(arr, n, times) {
    const str = arr.join("");
    return str.includes(String(n).repeat(times));
}

console.clear();
console.log(hasConsecutive([1, 3, 5, 5, 3, 3, 1], 3, 2)); // true
console.log(hasConsecutive([1, 2, 3, 4, 5], 1, 1)); //true
console.log(hasConsecutive([3], 1, 0)); // true
console.log(hasConsecutive([2, 2, 3, 2, 2, 2, 2, 3, 4, 1, 5], 3, 2)); //false
console.log(hasConsecutive([5, 5, 5, 5, 5], 5, 7)); //false
