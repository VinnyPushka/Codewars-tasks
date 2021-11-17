const fs = require('fs');
const path = require('path');

const inputData = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8');

let [n, m] = inputData.toString().split('\n');
m = m.split(' ').map((e) => Number(e.trim()));

function getMount(arr) {
    let max = arr[0];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] > max) max = arr[i];
    }

    if (max > sum - max) return 2 * max - sum;
    if (max <= sum - max) return sum;
}

let result = getMount(m);

fs.writeFileSync(path.resolve(__dirname, 'output.txt'), `${result}`);
