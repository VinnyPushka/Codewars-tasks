// function createCalcFunction(n) {
//     return function () {
//         console.log(1000 * n);
//     };
// }

// const calc = createCalcFunction(42);
// console.log(calc);

// calc();

//!====================================
// function createIncrementor(n) {
//     return function (num) {
//         return n + num;
//     };
// }

// const addOne = createIncrementor(1);
// const addTen = createIncrementor(10);

// console.log(addOne(10));
// console.log(addTen(10));

//!====================================
// function urlGenerator(domain) {
//     return function (url) {
//         return `https://${url}.${domain}`;
//     };
// }

// const comUrl = urlGenerator("com");
// console.log(comUrl("google"));

// console.log(urlGenerator(`com`)(`vk`));
//!====================================

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}
const person1 = { name: `Dima`, age: 30, job: "Frontend" };
const person2 = { name: `Katya`, age: 18, job: "Designer" };

function bind(context, fn) {
    return function (...agrs) {
        fn.apply(context, args);
    };
}

console.log(bind(person1, logPerson)());

//!======================== мой вариант дерьма ============
// function funct(func) {
//     return function y(obj) {
//         func.call(obj);
//     };
// }
// const bind = funct(logPerson);
// bind(person2);
