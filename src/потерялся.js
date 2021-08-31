function maxNumber(numbers) {
    let i = numbers.length;
    let max = -Infinity;
    while (i--) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
function minNumber(numbers) {
    let i = numbers.length;
    let min = Infinity;
    while (i--) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}
function findNumber(numbers) {
    const array = [];
    for (let i = minNumber(numbers); i <= maxNumber(numbers); i++) {
        array.push(i);
    }
    var arraySum = array.reduce(function (sum, current) {
        return sum + current;
    });

    var numbersSum = numbers.reduce(function (sum, current) {
        return sum + current;
    });
    missNumber = arraySum * 2 - numbersSum;
    return missNumber;
}
console.log(findNumber([1, 3, 4, 5, 2, 4, 1, 3, 5]));
