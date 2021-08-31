let calc = prompt("Введите выражение :", "2 * 2");

let calculator = new Function("return " + exp);

alert(calculator());

//Как узнать в функции new Function как язык видит что аргументы, а что тело функции

function makeFunction(...args) {
    let body = args.pop() || "";
    return new Function(...args, body);
}
