const arr = [
    { name: "a", value: 1 },
    { name: "b", value: 2 },
];
let o1 = Object.fromEntries(arr.map(({ name, value }) => [name, value]));

//Object.entries(obj) - превращает объект в массив из пар ключ/значение для obj

//на результате можно использовать map, filter etc.

//Object.fromEntries(array) - массив с парами ключ/значение превращает в объект
