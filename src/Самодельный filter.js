console.log(filter([1, 3, 2, 4], (n) => n < 3));

function filter(arr, callback) {
    let filtredArr = [];
    for (i of arr) {
        if (callback(i)) {
            filtredArr.push(i);
        }
    }
    return filtredArr;
}

//console.log(filter1([1, 3, 2, 4], (n) => n < 3));

function filter1(arr, func, thisArg) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (func.call(thisArg, arr[i], i, arr)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(
    filter1[(1, 3, 2, 4)],
    function (val, idx, arr) {
        return val < this.val;
    },
    { val: 3 }
);
