function help(amount, array) {
    let min = Math.min.apply(null, array);
    if (min > amount) return "";
    let array1 = ["", ...array];
    let idxWithPrices = [];

    for (let i = 1; i < array1.length; i++) {
        idxWithPrices.push([array1[i], i]);
    }

    idxWithPrices.sort((a, b) => b[1] - a[1]).sort((a, b) => a[0] - b[0]);

    let maxLength = Math.floor(amount / min);

    let arrayOfAppropriates = [idxWithPrices[0]];

    for (let i = 1; i < idxWithPrices.length; i++) {
        if (Math.floor(amount / idxWithPrices[i][0]) === maxLength) {
            arrayOfAppropriates.push(idxWithPrices[i]);
        }
    }

    if (maxLength === 1) {
        let ans = 0;
        for (let i = 0; i < arrayOfAppropriates.length; i++) {
            if (arrayOfAppropriates[i][1] > ans)
                ans = arrayOfAppropriates[i][1];
        }
        return `${ans}`;
    }

    let answer = getLongestNumber(arrayOfAppropriates[0]);

    for (let i = 1; i < arrayOfAppropriates.length; i++) {
        if (+getLongestNumber(arrayOfAppropriates[i]) > +answer) {
            answer = getLongestNumber(arrayOfAppropriates[i]);
        }
    }

    return answer;

    function getLongestNumber(numArr) {
        let dinares = amount;
        let divisionResult = Math.floor(dinares / numArr[0]);
        let result = [];
        let len = idxWithPrices.length;

        for (let i = 0; i < len; i++) {
            if (dinares === 0) break;
            if (numArr[1] === idxWithPrices[i][1]) continue;
            if (
                dinares - (divisionResult - 1 - result.length) * numArr[0] >=
                idxWithPrices[i][0]
            ) {
                result.push(idxWithPrices[i][1]);
                dinares -= idxWithPrices[i][0];
            }
        }

        result.sort((a, b) => b - a);

        let start = "";
        let finish = "";
        let middle = divisionResult - result.length;
        let middleElement = `${numArr[1]}`;

        for (let i = 0; i < result.length; i++) {
            result[i] > numArr[1]
                ? (start += result[i])
                : (finish += result[i]);
        }

        return `${start}${middleElement.repeat(middle)}${finish}`;
    }
}

console.log(help(5, [1, 1, 1, 1, 1, 1, 1, 1, 1]));
// console.log(
//     help(
//         1000000,
//         [555555, 545555, 225555, 100002, 185555, 100003, 885555, 895555, 155555]
//     )
// );

// array =  [1, 3, 2, 1, 9, 5]
// idxWithPrices = [[1, 4], [1, 1], [2, 3], [3, 2], [5, 6], [9, 5]]
// console.log(help(0, [1, 1, 1]));
