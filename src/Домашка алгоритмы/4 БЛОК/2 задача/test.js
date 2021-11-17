const fs = require('fs');
const path = require('path');

const inputData = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8');

let [n, ...m] = inputData.toString().trim().split('\n');

let blocks = m.map((e) =>
    e
        .trim()
        .split(' ')
        .map((i) => Number(i))
);

function getBlockAmount(arr) {
    let obj = {};
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i][0]]) obj[arr[i][0]] = arr[i][1];
        else if (obj[arr[i][0]] < arr[i][1]) obj[arr[i][0]] = arr[i][1];
    }

    for (let i in obj) {
        res += obj[i];
    }

    return res;
}

let result = getBlockAmount(blocks);

fs.writeFileSync(path.resolve(__dirname, 'output.txt'), `${result}`);
