/* Представьте, что у нас имеется некий объект obj, 
созданный функцией-конструктором – мы не знаем какой именно, 
но хотелось бы создать ещё один объект такого же типа.

Можем ли мы сделать так?

let obj2 = new obj.constructor();
Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает.
И пример функции-конструктора, с которой такой код поведёт себя неправильно. */

//? Поведет правильно

function Matrix(x) {
    this.x = x;
}

let matrix = new Matrix("love");
let matrix2 = new matrix.constructor("hate");

// console.log(matrix);
console.log(matrix2);

//! поведет неправильно

function Matrix(x) {
    this.x = x;
}
Matrix.prototype = {}; //! перезаписали прототип и constructor больше нет, т.к. он является свойством prototype

let matrix = new Matrix("love");
let matrix2 = new matrix.constructor("hate");

// console.log(matrix);
console.log(matrix2);
