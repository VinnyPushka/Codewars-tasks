const fs = require('fs');
const path = require('path');

const inputData = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8');

let [n, m, k] = inputData
    .toString()
    .split('\n')
    .map((item) => item.trim().split(' '));

function getMount(a, b, c) {
    let krestCount = 0;
    let nolCount = 0;
    let arr = [a, b, c];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] = arr[i][j].trim();
            let e = arr[i][j];
            if (e == '1') krestCount++;
            if (e == '2') nolCount++;
        }
    }
    let dif = krestCount - nolCount;

    if (!(dif <= 1) || !(dif >= 0)) return 'NO';

    if (dif === 0) {
        return isLine('1', '2', arr) ? 'NO' : 'YES';
    }

    if (dif === 1) {
        return isLine('2', '1', arr) ? 'NO' : 'YES';
    }

    function isLine(x, y, arr) {
        for (let i = 0; i < arr.length; i++) {
            if (!arr[i].includes('0') && !arr[i].includes(y)) {
                return true;
            }
        }

        for (let j = 0; j < arr.length; j++) {
            if (arr[0][j] === x && arr[1][j] === x && arr[2][j] === x)
                return true;
        }

        if (
            (a[0] === x && b[1] === x && c[2] === x) ||
            (a[2] === x && b[1] === x && c[0] === x)
        )
            return true;

        return false;
    }

    return 'YES';
}

let result = getMount(n, m, k);

fs.writeFileSync(path.resolve(__dirname, 'output.txt'), result);
