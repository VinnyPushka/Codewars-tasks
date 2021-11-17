const fs = require('fs');
const path = require('path');

const inputData = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8');

let [n, ...m] = inputData.toString().trim().split('\n');

let otrezki = m.map((e) =>
    e
        .trim()
        .split(' ')
        .map((i) => Number(i))
);

function getPole(arr) {
    let array2 = [];
    let state = 0;
    let maxCount = 0;

    for (let item of arr) {
        array2.push([item[0], 1]);
        array2.push([item[0] + item[1], -1]);
    }

    array2.sort((a, b) => {
        if (a[0] === b[0] && a[1] < b[1]) return -1;
        return a[0] - b[0];
    });

    for (let item of array2) {
        state += item[1];
        if (state > maxCount) maxCount = state;
    }

    return `${maxCount}`;
}

let result = getPole(otrezki);

fs.writeFileSync(path.resolve(__dirname, 'output.txt'), result);
