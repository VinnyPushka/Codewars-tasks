/*У нас есть массив строк arr. 
Нужно получить отсортированную копию,
но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию.
*/

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

function copySorted(arr) {
    return arr.slice(0).sort();
}

//console.log(sorted);
console.log(arr);
