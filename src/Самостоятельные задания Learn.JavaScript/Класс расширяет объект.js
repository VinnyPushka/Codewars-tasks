class Rabbit extends Object {
    constructor(options) {
        super(options);
        this.name = options.name;
    }
}

let rabbit = new Rabbit("Кроль");

console.log(rabbit.hasOwnProperty("name"));
