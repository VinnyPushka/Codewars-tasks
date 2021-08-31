/* Напишите функцию shuffle(array), 
которая перемешивает (переупорядочивает случайным образом) элементы массива.

Многократные прогоны через shuffle могут привести к разным последовательностям элементов. 
Например:
*/

/* let arr = [1, 2, 3];

function shuffle(arr) {
    arr.sort(() => 0.5 - Math.random());
}
shuffle(arr);
console.log(arr);
*/

//Более точный вариант:
let arr = [1, 2, 3];
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i

        //"деструктурирующее присваивание"

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}
shuffle(arr);
console.log(arr);
