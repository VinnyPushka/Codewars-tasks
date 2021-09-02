let animal = {
    eats: true,
};
let rabbit = {
    jumps: true,
};
Object.defineProperty(animal, `eats`, { enumerable: false });
rabbit.__proto__ = animal;

for (let i in rabbit) {
    console.log(i);
}
