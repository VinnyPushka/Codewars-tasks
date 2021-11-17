const fs = require('fs');
const path = require('path');

const inputData = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8');

let array = inputData.toString().trim().split(' ');

function isMet(arr) {
    let mass = new Set();
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (mass.has(arr[i])) {
            res.push('YES');
        } else {
            mass.add(arr[i]);
            res.push('NO');
        }
    }
    return res;
}

let result = isMet(array);

fs.writeFileSync(path.resolve(__dirname, 'output.txt'), result.join('\n'));
