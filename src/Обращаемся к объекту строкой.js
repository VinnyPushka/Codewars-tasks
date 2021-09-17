// Обращение к свойству объекта

const o = {
    a: {
        b: {},
        c: 42,
    },
    z: null,
};

function func(Obj, str) {
    if (!str) return Obj;
    let keys = str.split(".");
    let target = Obj[keys[0]];
    for (let i = 1; i < keys.length; i++) {
        target = target[keys[i]];
    }
    return target;
}

console.log(func(o, "a.c")); // => 42
console.log(func(o, "a.d")); //=> undefined
console.log(func(o, "z")); // => null
console.log(func(o, ""));
