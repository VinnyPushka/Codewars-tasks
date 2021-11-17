const fs = require('fs');
const path = require('path');

const inputData = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8');

let n = inputData.toString().trim();

function getMount(n) {
    let count = 0;
    let len = n.length;

    for (let i = 0; i < len / 2; i++) {
        if (n[i] !== n[len - i - 1]) count++;
    }

    return count;
}

let result = getMount(n);

fs.writeFileSync(path.resolve(__dirname, 'output.txt'), `${result}`);
