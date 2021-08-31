function sum(value) {
    let acc = value;

    function func(next) {
        acc += next;
        return func;
    }

    func.toString = function () {
        return acc;
    };

    return func;
}

console.log(sum(1)(2)(5)(3));
