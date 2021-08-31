/* Напишите функцию printNumbers(from, to), 
которая выводит число каждую секунду, 
начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.
*/

//setInterval
function printNumber(from, to) {
    let IntervalId = setInterval(function () {
        console.log(from++);
        if (from > to) clearInterval(IntervalId);
    }, 1000);
}

printNumber(1, 5);

//setTimeout
function printNumbers(from, to) {
    function getNum() {
        //можно добавить в setTimeout функцию сразу, тогда не нужно возвращать.
        console.log(from++);
        if (from <= to) setTimeout(getNum, 1000);
    }
    return getNum();
}
printNumbers(1, 5);
