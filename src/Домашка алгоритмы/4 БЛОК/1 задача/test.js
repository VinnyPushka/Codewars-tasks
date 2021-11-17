const fs = require('fs');
const path = require('path');

const inputData = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8');

let n = inputData
    .toString()
    .trim()
    .split(/\s/)
    .map((e) => e.trim())
    .filter((e) => {
        e.trim();
        return !!e;
    });

function getMount(arr) {
    let obj = {};
    let array = [];

    for (let i = 0; i < arr.length; i++) {
        let e = arr[i];
        if (!obj[e]) {
            obj[e] = 1;
        } else if (obj[e]) {
            obj[e] += 1;
        }

        array.push(obj[e] - 1);
    }

    return `${array.join(' ')}`;
}

let result = getMount(n);

fs.writeFileSync(path.resolve(__dirname, 'output.txt'), result);
