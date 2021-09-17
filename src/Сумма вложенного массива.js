let array = [1, 2, 3, [2, 4, 2], [5, 3, 2, [1, 3, 6, [9, 2, 3], 5, 2]], 5, 2];
function sum(arr) {
    let jointArray = [...arr.join("")].filter((e) => !isNaN(parseFloat(e)));
    let answer = jointArray.reduce((sum, idx) => (sum += +idx), 0);

    return answer;
}
console.log(sum(array));

function sum1(arr) {
    let summary = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            summary += sum(arr[i]);
        } else summary += arr[i];
    }
    return summary;
}
array.reduce((acc, item) => (acc += item), 0);
console.log(sum1(array));

function sum2(arr) {
    return arr.reduce(
        (acc, item) =>
            Array.isArray(item) ? (acc += sum2(item)) : (acc += item),
        0
    );
}
console.log(sum2(array));
