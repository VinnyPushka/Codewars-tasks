class Samurai {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log(this.name);
    }
}

let shogun = new Samurai("Dimych");

console.log(shogun.__proto__.__proto__ === Object.prototype);
console.log(shogun.__proto__.constructor.__proto__ === Function.prototype);
console.log(shogun.__proto__.__proto__.__proto__ === null);
