function one(x) {
    if (!x) return 1;
    return x(1);
}

function three(x) {
    if (!x) return 3;
    return x(3);
}

// function two()

// function four()
// function five()
// function six()
// function seven()
// function eight()
// function nine()

function plus(x) {
    return function (y) {
        return x + y;
    };
}
// function minus()
// function multi()
// function divide()

// function one()
// function one()

console.log(one(plus(three(plus(one(plus(three(plus(one())))))))));
