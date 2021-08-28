function logPerson(s, name, age) {
    if (age < 0) {
        age = "Еще не родился";
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`;
}
let user1 = {
    name: "Dima",
    age: 30,
};
const output = logPerson`Имя: ${user1.name}, Возвраст: ${user1.age}! `; //Строки попали в функцию как элементы массива s[]

console.log(output);
