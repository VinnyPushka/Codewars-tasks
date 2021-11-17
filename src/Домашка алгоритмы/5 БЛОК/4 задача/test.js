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
    arr.sort((a, b) => a[0] - b[0]);
    let res = arr[0][1] - arr[0][0];
    let end = arr[0][1];

    for (let i = 1; i < arr.length; i++) {
        let e = arr[i];
        if (e[1] < end) continue;
        if (e[0] < end) {
            res += e[1] - end;
        } else {
            res += e[1] - e[0];
        }
        end = e[1];
    }
    return `${res}`;
}

let result = getPole(otrezki);

fs.writeFileSync(path.resolve(__dirname, 'output.txt'), result);
