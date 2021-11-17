const fs = require('fs');
const path = require('path');

const inputData = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8');

let [n, m] = inputData.toString().trim().split('\n');
let r = Number(n.trim().split(' ')[1]);
let pamiatniki = m
    .trim()
    .split(' ')
    .map((e) => Number(e));

function getBlockAmount(len, arr) {
    let count = 0;
    let start = 1;

    for (let i = 0; i < arr.length; i++) {
        for (let j = start; j < arr.length; j++) {
            if (arr[j] - arr[i] > len) {
                start = j;
                count += arr.length - j;
                break;
            } else if (j === arr.length - 1) return `${count}`;
        }
    }

    return `${count}`;
}

let result = getBlockAmount(r, pamiatniki);

fs.writeFileSync(path.resolve(__dirname, 'output.txt'), result);
