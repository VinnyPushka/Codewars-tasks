// У нас есть объект salaries с зарплатами:

let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
};
/*
Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
*/
/* без деструктурирования

function topSalary(obj) {
    let sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    return sorted[0][0];
}
console.log(topSalary(salaries));
*/
// Вариант 2, деструктурирование

function topSalary(obj) {
    let max = 0,
        maxName = null;

    for (const [name, salary] of Object.entries(obj)) {
        if (max < salary) {
            max = salary;
            maxName = name;
        }
    }
    return maxName;
}
console.log(topSalary(salaries));
