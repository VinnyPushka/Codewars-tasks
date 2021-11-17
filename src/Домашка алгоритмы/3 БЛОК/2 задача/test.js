const fs = require('fs');
const path = require('path');

const inputData = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8');

let [n, m] = inputData.toString().trim().split('\n');

function getIntimacy(first, second) {
    let set = new Set();
    let count = 0;

    for (let i = 1; i < second.length; i++) {
        set.add(`${second[i - 1]}${second[i]}`);
    }

    for (let i = 1; i < first.length; i++) {
        if (set.has(`${first[i - 1]}${first[i]}`)) count++;
    }

    return count;
}

let result = getIntimacy(n, m);

fs.writeFileSync(path.resolve(__dirname, 'output.txt'), `${result}`);
