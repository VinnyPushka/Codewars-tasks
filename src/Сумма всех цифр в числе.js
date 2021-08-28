function sumDigits(num) {
    return eval(num.toString().split("").join("+"));
}

function sumDigits2(num) {
    let numArr = num.toString().split("");
    return numArr.reduce((sum, current) => sum + +current, 0);
}

function sumDigits1(num) {
    let acc = 0;
    let current = num;
    while (current > 0) {
        acc += current % 10;
        current = Math.floor(current / 10);
    }
    return acc;
}
console.log(sumDigits1(123));
console.log(sumDigits1(9045));
console.log(sumDigits1(3));
