function findMaxLength(arr) {
    let max = 0;
    let current = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            current++;
            max = Math.max(max, current);
        } else current = 0;
    }
    return max;
}

console.log(findMaxLength([0, 0, 0, 0]));
console.log(findMaxLength([1, 0, 1, 1, 1, 0]));
console.log(findMaxLength([1, 1, 1, 1, 1, 1]));
console.log(findMaxLength([]));
