// Посчитать сумму элементов массива, в котором могут присутствовать не только числа,
// но и вложенные массивы и строки. Суммировать только числа.

let awfulArray = [
    1,
    2,
    [1, 2],
    [[[[1]]]],
    "lol",
    "12asd",
    ["13", "14gg"],
    { 12: "5" },
];

function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i]) == true) {
            sum += sumArray(array[i]);
        } else if (
            typeof array[i] == "object" &&
            Array.isArray(array[i]) == false
        ) {
            for (let objElem in array[i]) {
                if (!isNaN(objElem / 1)) {
                    sum += +objElem;
                }
                if (!isNaN(array[i][objElem] / 1)) {
                    sum += +array[i][objElem];
                }
            }
        } else if (!isNaN(array[i] / 1)) {
            sum += +array[i];
        }
    }
    return sum;
}
console.log(sumArray(awfulArray));
