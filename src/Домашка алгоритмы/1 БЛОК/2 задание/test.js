const fs = require('fs');
const path = require('path');

const inputData = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8');

const [a, b, c, d] = inputData.toString().split('\n');

function getString(a, b, c, d) {
    let arr = [];

    const array = [b, c, d];

    function normal(str) {
        let res = '';
        for (let i = 0; i < str.length; i++) {
            str[i] = str[i];
            if (!isNaN(str[i])) res += str[i];
        }

        if (res.length === 7) res = '495' + res;
        if (res.length === 11) res = res.slice(1);

        return res;
    }

    a = normal(a.trim());

    for (let i = 0; i < array.length; i++) {
        normal(array[i].trim()) === a ? arr.push('YES') : arr.push('NO');
    }

    return arr;
}

let result = getString(a, b, c, d).join('\n');

fs.writeFileSync(path.resolve(__dirname, 'output.txt'), result);

// const res = [];

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].trim().replace(/[^\d]/g, '');
//     if (arr[i].length === 8 || arr[i].length === 11) arr[i] = arr[i].slice(1);
//     if (arr[i].length === 7) arr[i] = '495' + arr[i];
// }

// for (let i = 1; i < arr.length; i++) {
//     arr[i] === arr[0] ? res.push('YES') : res.push('NO');
// }

// return res;
