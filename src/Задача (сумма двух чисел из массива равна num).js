function check(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(num - arr[i], i + 1)) return true;
    }
    return false;
}
function check1(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === num) return true;
        }
    }
    return false;
}

console.log(check1([10, 15, 3, 7], 17));
console.log(check1([15, 10, 3, 7], 20));
