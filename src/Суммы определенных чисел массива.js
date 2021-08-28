function calculate(arr) {
    let res = 0;
    arr.forEach((item) => {
        if (item % 2 !== 0) res += item;
    });
    return res;
}

function calculate3(arr) {
    return arr.reduce(
        (sum, current) => (current > 0 && current % 2 ? sum + current : sum),
        0
    );
}

function calculate1(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && arr[i] % 2 !== 0) res += arr[i];
    }
    return res;
}

console.log(calculate3([5, 0, -5, 20, 88, 17, -32]));
