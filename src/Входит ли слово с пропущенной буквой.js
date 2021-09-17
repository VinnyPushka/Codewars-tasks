function isIn(a, b) {
    let arr = [];
    for (let i = 0; i < a.length; i++) {
        arr.push(a.slice(0, i) + a.slice(i + 1));
    }
    return arr.includes(b);
}

let a = "Некоторая строка";
let b = "екоторая строка";
console.log(isIn(a, b));
