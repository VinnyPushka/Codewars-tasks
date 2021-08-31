function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

function bind(context, fn) {
    return function (...args) {
        fn.apply(context, args);
    };
}

const person1 = { name: "Михаил", age: 22, job: "frontend" };
const person2 = { name: "Елена", age: 19, job: "SMM" };

bind(person1, logPerson)();
bind(person2, logPerson)();
