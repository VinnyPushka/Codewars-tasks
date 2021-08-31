//Добавьте всем функциям в прототип метод defer(ms),
//который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

//Например, должно работать так:

Function.prototype.defer = function (ms) {
    //! This - это функция перед точкой
    let f = this;

    return function (...args) {
        setTimeout(() => f.apply(this, args), ms); //! у setTimeout This = global
    };
};

//? через bind

Function.prototype.defer = function (time) {
    return function (...args) {
        setTimeout(this, time, ...args);
    }.bind(this);
};

function f(a, b) {
    console.log(a + b);
}

f.defer(1000)(1, 2);
