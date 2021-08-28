function* strGenerator() {
    yield "H";
    yield "e";
    yield "l";
    yield "l";
    yield "o";
}

const str = strGenerator(); //! при каждом вызове str.next() мы будем получать объект с value: yield и done: false пока
//! все yield не кончатся, затем примет значение undefined и статус done: true (закончен)

function* numberGen(n = 10) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

const num = numberGen(7);

// const iterator = {
//     [Symbol.iterator](n = 10) {
//         let i = 0;

//         return {
//             next() {
//                 if (i < n) {
//                     return { value: ++i, done: false };
//                 }
//                 return { value: undefined, done: true };
//             },
//         };
//     },
// };

function* iter(n = 10) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

for (let k of iter(6)) {
    console.log(k);
}
