/* Хотим вернуть массив ключей map.keys(), чтобы потом, например заPushить, но не работает
let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");
*/

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys()); //map.keys() возвращает объект, а не массив

keys.push("more");

console.log(keys);
