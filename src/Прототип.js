function Person(firstName, lastName, born) {
    //? this = {} (неявно)
    //? this.__proto__ = Person.prototype (неявно)

    this.firstName = firstName;
    this.lastName = lastName;
    this.born = born;

    //? return this; (неявно)
}

Person.prototype.age = function () {
    var now = new Date();

    return now.getFullYear() - this.born;
};

var iam = new Person("Dima", "Vinogradov", 1990);

iam.__proto__ === Person.prototype; //?

console.log(iam.age());

//! Через Классы

class Person1 {
    constructor(firstName, lastName, born) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.born = born;
    }

    age() {
        var now = new Date();

        return now.getFullYear() - this.born;
    }
}
