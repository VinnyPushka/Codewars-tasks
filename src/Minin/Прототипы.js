const person = new Object({
    name: "Dima",
    age: 30,
    greet: function () {
        console.log("greet!");
    },
});

Object.prototype.sayHello = function () {
    console.log("Hello!");
};

const lena = Object.create(person);
lena.name = "Elena";

function g() {
    console.log("hi");
}

console.log(typeof g);
