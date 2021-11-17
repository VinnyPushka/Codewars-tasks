const fs = require('fs');
const path = require('path');

const inputData = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8');

let [n, m] = inputData.toString().trim().split('\n');
m = m
    .trim()
    .split(' ')
    .map((e) => Number(e));

function getBlockAmount(arr) {
    let max = 0;
    let sum = 0;
    let maxneggative = -Infinity;

    for (let item of arr) {
        sum += item;
        if (sum > max) max = sum;
        if (sum < 0) sum = 0;
        if (item < 0 && item > maxneggative) maxneggative = item;
    }

    if (max === 0) max = maxneggative;
    return `${max}`;
}

let result = getBlockAmount(m);

fs.writeFileSync(path.resolve(__dirname, 'output.txt'), result);
