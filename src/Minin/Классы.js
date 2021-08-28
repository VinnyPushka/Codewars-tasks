class Animal {
    constructor(options) {
        this.name = options.name;
        this.color = options.color;
    }

    voice() {
        console.log(this.name + " Говорит *звуки животного*");
    }
}

class Cat extends Animal {
    constructor(options) {
        super(options);
        this.type = `cat`;
        this.isTailed = true;
    }
    voice() {
        console.log(this.name + " says Mew-mew");
    }
}
class Dog extends Animal {
    constructor(options) {
        super(options);
        this.type = `dog`;
        this.sound = "woof-woof";
        this.age = options.age;
    }

    voice() {
        console.log(this.name + ` says ` + this.sound);
    }
    get ageInfo() {
        return this.age * 7;
    }

    set ageInfo(newAge) {
        this.age = newAge;
    }
}
const dog = new Dog({ name: `Sharik`, color: "red", age: 15 });

const cat = new Cat({ name: "Murzik", color: "black", isTailed: true });

Object.prototype.print = function () {
    console.log(`hi, i'm object:`, this);
};

Array.prototype.myMapLog = function () {
    console.log("Array to map", this);
    return this.map.apply(this, arguments);
};

String.prototype.toTag = function (tagName) {
    return `<${tagName}>${this}</${tagName}>`;
};
console.log("dimkadimka".toTag("div"));
