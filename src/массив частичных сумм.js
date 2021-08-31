function getSums(arr) {
    const newArray = [];
    const totalSum = arr.reduce(function (sum, item) {
        newArray.push(sum);
        return sum + item;
    });
    newArray.push(totalSum);
    return newArray;
}

console.log(getSums([1, 2, 3, 4, 5]));
