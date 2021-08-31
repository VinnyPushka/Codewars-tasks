/*
Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

Напишите функцию sumSalaries(salaries),
которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0.
*/

let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
};

function sumSalaries(obj) {
    let salArray = Object.values(obj);
    let sum = 0;
    for (let i of salArray) {
        sum += i;
    }
    return sum;
}

console.log(sumSalaries(salaries));
