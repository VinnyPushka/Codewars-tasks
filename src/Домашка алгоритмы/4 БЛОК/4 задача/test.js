const fs = require('fs');
const path = require('path');

const inputData = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8');

let [n, ...m] = inputData.toString().trim().split('\n');

let letters = m[0].trim().split('');

function getPole(arr) {
    let obj = {};
    let middle = '';
    let res = [];
    arr.sort();

    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] ? obj[arr[i]]++ : (obj[arr[i]] = 1);
    }

    for (let i in obj) {
        if (obj[i] > 1) {
            if (obj[i] % 2 === 0) {
                n = obj[i] / 2;
                obj[i] = 0;
                while (n > 0) {
                    res.push(i);
                    n--;
                }
            } else {
                n = Math.floor(obj[i] / 2);
                obj[i] = 1;
                while (n > 0) {
                    res.push(i);
                    n--;
                }
            }
        }
    }

    for (let i in obj) {
        if (obj[i]) {
            middle = i;
            break;
        }
    }

    return `${res.join('')}${middle}${res.reverse().join('')}`;
}

let result = getPole(letters);

fs.writeFileSync(path.resolve(__dirname, 'output.txt'), `${result}`);
