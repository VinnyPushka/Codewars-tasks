function hello() {
    console.log("Hello", this);
}

const person = {
    name: "Dima",
    age: 30,
    sayHello: hello,
    sayHelloWindow: hello.bind(this), //! this - window
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`);
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd();
    },
};

const katya = {
    name: "Katya",
    age: 18,
};

//? .call (сразу запускает функцию с нужным контекстом и параметрами)
//! const fnKatyaInfoLog = person.logInfo.call(katya, "Designer", "8-923-203-30-44");

//? .apply (сразу запускает функцию с нужным контекстом и параметрами в виде массива)
//! const fnKatyaInfoLog = person.logInfo.apply(katya, [
//!     "Designer",
//!    "8-923-203-30-44",
//! ]);
//? .bind (возвращает функцию)
//! const fnKatyaInfoLog = person.logInfo.bind(katya, "Designer", "8-923-203-30-44");
//! fnKatyaInfoLog();

//==================

const array = [1, 2, 3, 4, 5];

// function multBy(arr, n) {
//     return arr.map((i) => i * n);
// }

Array.prototype.multBy = function (n) {
    return this.map((i) => i * n);
};
