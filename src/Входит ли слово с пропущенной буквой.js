function isIn(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str.slice(0, i) + str.slice(i + 1));
    }
}
console.log(arr);
let str = "Некоторая строка";
