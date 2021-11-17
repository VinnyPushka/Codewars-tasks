const fs = require('fs');
const path = require('path');

const inputData = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8');

let [n, m] = inputData.toString().split('\n');
let [len, confuseCount] = n.split(' ');

confuseCount = Number(confuseCount.trim());
let arrayB = m.split(' ').map((e) => Number(e));

function getMount(confuseCount, arrayB) {
    let min = arrayB[0];
    let max = arrayB[0];

    for (let i = 1; i < arrayB.length; i++) {
        if (arrayB[i] < min) min = arrayB[i];
        if (arrayB[i] > max) max = arrayB[i];
    }

    return max - min;
}

let result = getMount(confuseCount, arrayB);

fs.writeFileSync(path.resolve(__dirname, 'output.txt'), `${result}`);
