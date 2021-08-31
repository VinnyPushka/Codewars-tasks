// function curry(f) {
//     // curry(f) выполняет каррирование
//     return function (a) {
//         return function (b) {
//             if (b === undefined) {
//                 return f(a);
//             } else return f(a, b);
//         };
//     };
// }

// // использование
// function sum(a, b) {
//     return a + b;
// }

// let carriedSum = curry(sum);

// console.log(carriedSum(1)); // 3

// function foo(value) {
//     var acc = value;
//     return function addNext(next) {
//         if (next === undefined) {
//             return acc;
//         } else {
//             acc += next;
//             return addNext;
//         }
//     };
// }

function sum(value) {
    let acc = value;

    function func(next) {
        acc += next;
        return func;
    }
    func.toString = function () {
        return acc;
    };

    return func;
}

console.log(+sum(1)(2)(5)(3));
