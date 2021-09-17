// let inc = (function () {
//     count = 0;
//     return () => console.log(++count);
// })();

// inc();
// inc();
// inc();
// inc();

// const obj = {
//     a: 42,
//     say: function () {
//         function helper() {
//             console.log(this.a);
//         }
//         setTimeout(helper.bind(this), 1000);
//     },
// };

// obj.say();

// let words = [
//     "banana",
//     "grapefruit",
//     "banana",
//     "grapefruit",
//     "banana",
//     "orange",
//     "banana",
// ];

// function sortir(arr) {
//     let obj = {};
//     arr.forEach((element) => {
//         obj[element] ? obj[element]++ : (obj[element] = 1);
//     });

//     return Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
// }
// console.log(sortir(words));

// function multiplyByTwo() {
//     let args = [...arguments];
//     return args.map((item) => item * 2);
// }

// console.log(multiplyByTwo(1, 2, 3, 4, 5, 6, 6));

// function sum(a) {
//     let summary = a;
//     return function sum2(b) {
//         sum2.toString = () => summary;
//         if (!b) return summary;
//         summary += b;
//         return sum2;
//     };
// }
// console.log(sum(1)(2)(3)(4));

function sum(a, b) {
    return a + b;
}

let mul = (a, b) => a * b;

let calculate = (f) => (a) => (b) => f(a, b);

console.log(calculate(sum)(3)(2));
console.log(calculate(mul)(3)(2));

// function foo(value) {
//     var acc = value;
//     function addNext(next) {
//         acc += next;
//         return addNext;
//     }
//     addNext.toString = addNext.valueOf = function () {
//         return acc;
//     };
//     return addNext;
// }
// console.log(foo(1)(2)(5)(3));
