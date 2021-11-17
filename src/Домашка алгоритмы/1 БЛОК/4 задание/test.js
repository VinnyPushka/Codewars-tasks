const fs = require('fs');
const path = require('path');

const inputData = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8');

let [n, k, m] = inputData
    .toString()
    .split(' ')
    .map((num) => Number(num));

function getMount(a, b) {
    if (a <= 12 && b <= 12 && a !== b) return 0;
    return 1;
}
let result = getMount(n, k);

fs.writeFileSync(path.resolve(__dirname, 'output.txt'), `${result}`);
